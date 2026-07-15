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

        settings: {
            index: 'settings',

            profile: 'profile',
            privacy: 'privacy',
            notifications: 'notifications',

            theme: 'theme',
            language: 'language',

            help: 'help',
            about: 'about',
        },
    },
} as const;
