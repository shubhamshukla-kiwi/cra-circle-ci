/* eslint-disable @typescript-eslint/unbound-method, @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unsafe-assignment */

import { bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { useCallback, useEffect, useReducer } from 'react';
import type { Dispatch } from 'redux';
import type { DependencyList } from 'react';

import { ACTION_TYPES, FETCH_TYPES, INITIAL_STATE } from './constants';
import { fetchReducer } from './reducer';
import type {
  FailurePayload,
  FetchStartPayload,
  State,
  SuccessPayload,
  UseFetchOptions,
} from './types';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export const useFetch = <T = any>(
  options: UseFetchOptions<T>,
  dependencies: DependencyList = [],
) => {
  const {
    cleanBeforeRefetch = true,
    defer = false,
    onError,
    reducer = fetchReducer,
    request,
  } = options;

  type ResponseType = ThenArg<ReturnType<typeof request>>;

  type Fetch = (...rest: Parameters<typeof request>) => void;

  const [{ response, error, isLoading, status, source }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE as State<ResponseType>,
  );

  const { fetchSuccess, fetchFailure, fetchStart } = bindActionCreators(
    {
      fetchSuccess: createAction<SuccessPayload>(ACTION_TYPES.FETCH_SUCCESS),
      fetchFailure: createAction<FailurePayload>(ACTION_TYPES.FETCH_FAILURE),
      fetchStart: createAction<FetchStartPayload>(ACTION_TYPES.FETCH_START),
    },
    dispatch as Dispatch,
  );

  const fetchData = useCallback(
    async (...rest) => {
      fetchStart({ cleanBeforeRefetch: true });
      try {
        const response = await request(...rest);
        fetchSuccess({ response });
      } catch (error) {
        fetchFailure({ error });
        if (onError) onError(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [request, onError],
  ) as Fetch;

  const refetchData = useCallback(
    async (...rest) => {
      fetchStart({ cleanBeforeRefetch, source: FETCH_TYPES.REFETCH });
      try {
        const response = await request(...rest);
        fetchSuccess({ response });
      } catch (error) {
        fetchFailure({ error });
        if (onError) onError(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [request, onError],
  ) as Fetch;

  useEffect(() => {
    if (defer) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defer, ...dependencies]);

  return {
    response: response as ResponseType,
    error,
    isLoading,
    status,
    source,

    fetchFailure,
    fetchStart,
    fetchSuccess,

    dispatch,
    fetch: fetchData,
    refetch: refetchData,
  };
};
