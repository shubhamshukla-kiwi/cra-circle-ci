export const ACTION_TYPES = {
  FETCH_FAILURE: 'FETCH_FAILURE',
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export const STATUS = {
  FAILED: 'failed' as const,
  IDLE: 'idle' as const,
  LOADING: 'loading' as const,
  SUCCEEDED: 'succeeded' as const,
};

export const FETCH_TYPES = {
  FETCH: 'fetch' as const,
  REFETCH: 'refetch' as const,
};

export const INITIAL_STATE = {
  error: undefined,
  isLoading: false,
  response: undefined,
  status: STATUS.IDLE,
  source: FETCH_TYPES.FETCH,
};
