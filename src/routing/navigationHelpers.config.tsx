import { PATHS } from '@/routing/path.config';

// for useNavigate
export const useNavigatePaths = {
    auth: {
        signIn: () => `/${PATHS.auth.index}/${PATHS.auth.signIn}`,
        signUp: () => `/${PATHS.auth.index}/${PATHS.auth.signUp}`,
        resetPassword: () => `/${PATHS.auth.index}/${PATHS.auth.resetPassword}`,
    },

    app: {
        chats: () => `/${PATHS.app.chats}`,
        chat: (id: number) => `/${PATHS.app.chat.slice(0, 4)}/${id}`,

        settings: {
            index: () => `/${PATHS.app.settings.index}`,
            profile: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.profile}`,
            privacy: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.privacy}`,
            notifications: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.notifications}`,
            theme: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.theme}`,
            language: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.language}`,
            help: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.help}`,
            about: () => `/${PATHS.app.settings.index}/${PATHS.app.settings.about}`,
        },
    },
} as const;