import {
  AGENT_API_URL,
  CLIENT_API_URL,
} from '../../constants/env';

export const API_ENDPOINT = CLIENT_API_URL;
export const AGENT_API_ENDPOINT = window.api_url || AGENT_API_URL;
export const SELF_URL = window.location.origin + "/";
export const AGENT_SELF_URL = window.location.origin + "/";
