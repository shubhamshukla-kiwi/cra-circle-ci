/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { handleActions } from 'redux-actions';
import type { Reducer, ReducerMap } from 'redux-actions';

import { ACTION_TYPES, FETCH_TYPES, INITIAL_STATE, STATUS } from './constants';
import type {
  FailurePayload,
  FetchStartPayload,
  ReducerPayload,
  State,
  SuccessPayload,
} from './types';

const fetchStart: Reducer<State, FetchStartPayload> = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    error: null,
    isLoading: true,
    source: payload.source ?? FETCH_TYPES.FETCH,
    response: payload.cleanBeforeRefetch ? undefined : state.response,
    status: STATUS.LOADING,
  };
};

const fetchFailure: Reducer<State, FailurePayload> = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    error: payload.error,
    isLoading: false,
    status: STATUS.FAILED,
  };
};

const fetchSuccess: Reducer<State, SuccessPayload> = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    error: null,
    isLoading: false,
    response: payload.response,
    status: STATUS.SUCCEEDED,
  };
};

export const fetchReducer = handleActions(
  {
    [ACTION_TYPES.FETCH_START]: fetchStart,
    [ACTION_TYPES.FETCH_FAILURE]: fetchFailure,
    [ACTION_TYPES.FETCH_SUCCESS]: fetchSuccess,
  } as ReducerMap<State, ReducerPayload>,
  INITIAL_STATE,
);
