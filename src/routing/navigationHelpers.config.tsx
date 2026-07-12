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
    },
    settings: {
        index: () => `/${PATHS.settings.index}`,
        profile: () => `/${PATHS.settings.index}/${PATHS.settings.profile}`,
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
        settings: () => `${FRONTEND_URL}${useNavigatePaths.settings.index()}`,
        profile: () => `${FRONTEND_URL}${useNavigatePaths.settings.profile()}`,
    },
} as const;