/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReduxCompatibleReducer } from 'redux-actions';

import { FETCH_TYPES } from './constants';

export type ACTION_TYPES = 'FETCH_FAILURE' | 'FETCH_START' | 'FETCH_SUCCESS';

export type Status = 'failed' | 'idle' | 'loading' | 'succeeded';

export type Source = typeof FETCH_TYPES.FETCH | typeof FETCH_TYPES.REFETCH;

export interface State<T = any> {
  error: any;
  isLoading: boolean;
  response?: T;
  status: Status;
  source: Source;
}

export interface Payload {
  error: null;
  isLoading: boolean;
  response: any;
  status: string;
}

export interface FetchStartPayload {
  cleanBeforeRefetch?: boolean;
  source?: Source;
}

export interface SuccessPayload<T = any> {
  response: T;
}

export interface FailurePayload {
  error: string;
}

export type ReducerPayload =
  | FetchStartPayload
  | FailurePayload
  | SuccessPayload;

export type UseFetchReducer<T> = ReduxCompatibleReducer<State<T>, Payload>;

export interface UseFetchOptions<T> {
  defer?: boolean;
  cleanBeforeRefetch?: boolean;
  onError?: (error: any) => void;
  reducer?: UseFetchReducer<T>;
  request(...args: any): Promise<T>;
}
