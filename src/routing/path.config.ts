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
        signIn: () => `/auth/${PATHS.auth.signIn}`,
        signUp: () => `/auth/${PATHS.auth.signUp}`,
        resetPassword: () => `/auth/${PATHS.auth.resetPassword}`,
    },
    app: {
        chats: () => `/${PATHS.app.chats}`,
        chat: (id: number) => `/${PATHS.app.chat.slice(0, 4)}/${id}`,
        settings: () => `/${PATHS.app.settings}`,
        profile: () => `/${PATHS.app.settings}/${PATHS.app.profile}`
    }
} as const;

// for NavLink or Link components
export const ABSOLUTE_URLS = {
    auth: {
        signIn: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signIn()}`,
        signUp: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signUp()}`,
        resetPassword: () => `${FRONTEND_URL}${ROUTE_URLS.auth.resetPassword()}`,
    },
    app: {
        chats: () => `${FRONTEND_URL}${ROUTE_URLS.app.chats()}`,
        chat: (id: number) => `${FRONTEND_URL}${ROUTE_URLS.app.chat(id)}`,
        settings: () => `${FRONTEND_URL}${ROUTE_URLS.app.settings()}`,
        profile: () => `${FRONTEND_URL}${ROUTE_URLS.app.profile()}`
    }
} as const;