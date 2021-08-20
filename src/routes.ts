// List of route patterns for 404 checking
// Needed since we're using nested non-'exact' routes
export const clientRoutes = [
    '/',
    '/login',
    '/dashboard',
    '/coming-soon',
    '/confirm/:token',
    '/congratulations',
    '/oops',
    '/privacy',
    '/tos',
    '/register/:token',
    '/sign-up',
    '/new-quote/drivers',
    '/new-quote/vehicles',
    '/new-quote',
    '/quote-success',
];


export const agentRoutes = [
    '/agent/',
    '/agent/agent-dashboard',
    '/agent/agent-payment',
    '/agent/login',
    '/agent/agent-add-card',
];