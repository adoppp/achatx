const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

// endpoints for router config and url functions
export const PATHS = {
    auth: {
        signIn: 'signin',
        signUp: 'signup',
        resetPassword: 'reset_password',
    },
    app: {
        chats: 'chats',
        chat: 'chat/:chatId',
        settings: 'settings',
        profile: 'profile'
    },
} as const;

// urls for useNavigate
export const ROUTE_URLS = {
    auth: {
        signIn: () => `/achatx/auth/${PATHS.auth.signIn}`,
        signUp: () => `/achatx/auth/${PATHS.auth.signUp}`,
        resetPassword: () => `/achatx/auth/${PATHS.auth.resetPassword}`,
    },
    app: {
        chats: () => `/achatx/app/${PATHS.app.chats}`,
        chat: (id: number) => `/achatx/app/${PATHS.app.chat.slice(0, 4)}/${id}`,
        settings: () => `/achatx/app/${PATHS.app.settings}`,
        profile: () => `/achatx/app/${PATHS.app.settings}/${PATHS.app.profile}`
    }
} as const;

// for NavLink or Link components
export const ABSOLUTE_URLS = {
    auth: {
        signIn: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signIn().slice(7)}`,
        signUp: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signUp().slice(7)}`,
        resetPassword: () => `${FRONTEND_URL}${ROUTE_URLS.auth.resetPassword().slice(7)}`,
    },
    app: {
        chats: () => `${FRONTEND_URL}${ROUTE_URLS.app.chats().slice(7)}`,
        chat: (id: number) => `${FRONTEND_URL}${ROUTE_URLS.app.chat(id).slice(7)}`,
        settings: () => `${FRONTEND_URL}${ROUTE_URLS.app.settings().slice(7)}`,
        profile: () => `${FRONTEND_URL}${ROUTE_URLS.app.profile().slice(7)}`
    }
} as const;