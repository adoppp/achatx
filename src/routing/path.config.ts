// endpoints for router config and url functions
export const PATHS = {
    auth: {
        index: 'auth',
        signIn: 'signin',
        signUp: 'signup',
        resetPassword: 'reset_password',
    },
    app: {
        chats: 'chats',
        chat: 'chat/:chatId',
    },
    settings: {
        index: 'settings',
        profile: 'profile'
    }
} as const;