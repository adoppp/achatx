import { PATHS } from '@/routing/path.config';

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

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

// for NavLink or Link components
export const absoluteUrls = {
    auth: {
        signIn: () => `${FRONTEND_URL}${useNavigatePaths.auth.signIn()}`,
        signUp: () => `${FRONTEND_URL}${useNavigatePaths.auth.signUp()}`,
        resetPassword: () => `${FRONTEND_URL}${useNavigatePaths.auth.resetPassword()}`,
    },

    app: {
        chats: () => `${FRONTEND_URL}${useNavigatePaths.app.chats()}`,
        chat: (id: number) => `${FRONTEND_URL}${useNavigatePaths.app.chat(id)}`,

        settings: {
            index: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.index()}`,
            profile: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.profile()}`,
            privacy: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.privacy()}`,
            notifications: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.notifications()}`,
            theme: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.theme()}`,
            language: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.language()}`,
            help: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.help()}`,
            about: () => `${FRONTEND_URL}${useNavigatePaths.app.settings.about()}`,
        },
    },
} as const;
