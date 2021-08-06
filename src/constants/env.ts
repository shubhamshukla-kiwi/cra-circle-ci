// TODO: Remove default values when environment variables are injected from ops

// Admin portal
export const ADMIN_API_URL =
  process.env.REACT_APP_ADMIN_API_URL ||
  'https://api-admin-stg.quoteseekr.com/';

// Agent & Client
export const FACEBOOK_PIXEL_ID =
  process.env.REACT_APP_FACEBOOK_PIXEL_ID || '201528398325981';

// Agent portal
export const AGENT_API_URL =
  process.env.REACT_APP_AGENT_API_URL ||
  'https://api-agent-stg.quoteseekr.com/';

// Client portal
export const CLIENT_API_URL =
  process.env.REACT_APP_CLIENT_API_URL || 'https://api-stg.quoteseekr.com/';

export const CLIENT_GOOGLE_ANALYTICS_ID =
  process.env.REACT_APP_CLIENT_GOOGLE_ANALYTICS_ID || 'UA-133663763-2';

export const CLIENT_GOOGLE_ANALYTICS_DEBUG =
  process.env.REACT_APP_CLIENT_GOOGLE_ANALYTICS_DEBUG === 'true' || false;
