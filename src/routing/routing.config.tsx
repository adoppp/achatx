import { PATHS } from '@/routing/path.config';
import { SignUpFormProvider } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import type { RouteObject } from 'react-router';
import { PrivateRoute } from '@/routing/routes/PrivateRoute';
import {
    AboutPage,
    AppLayout,
    AuthLayout,
    ChatPage,
    ChatsPage,
    HelpPage,
    LanguagePage,
    MainLayout,
    NotificationsPage,
    PrivacyPage,
    ProfilePage,
    ResetPasswordPage,
    SettingsLayout,
    SignInPage,
    SignUpPage,
    ThemePage,
} from '@/routing/pages.import';

export const appConfig: RouteObject[] = [
    {
        path: PATHS.app.chats,
        element: <ChatsPage />,
    },
    {
        path: PATHS.app.chat,
        element: <ChatPage />,
    },
    {
        path: PATHS.app.settings.index,
        element: <SettingsLayout />,
        children: [
            {
                path: PATHS.app.settings.profile,
                element: <ProfilePage />,
            },
            {
                path: PATHS.app.settings.privacy,
                element: <PrivacyPage />,
            },
            {
                path: PATHS.app.settings.notifications,
                element: <NotificationsPage />,
            },
            {
                path: PATHS.app.settings.theme,
                element: <ThemePage />,
            },
            {
                path: PATHS.app.settings.language,
                element: <LanguagePage />,
            },
            {
                path: PATHS.app.settings.help,
                element: <HelpPage />,
            },
            {
                path: PATHS.app.settings.about,
                element: <AboutPage />,
            },
        ],
    },
];

export const authConfig: RouteObject[] = [
    {
        path: PATHS.auth.signIn,
        element: <SignInPage />,
        handle: {
            title: 'Sign in',
        },
    },
    {
        path: PATHS.auth.signUp,
        element: (
            <SignUpFormProvider>
                <SignUpPage />
            </SignUpFormProvider>
        ),
        handle: {
            title: 'Sign up',
        },
    },
    {
        path: PATHS.auth.resetPassword,
        element: <ResetPasswordPage />,
        handle: {
            title: 'Reset password',
        },
    },
];

export const globalConfig: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        element: <MainLayout />,
                        children: appConfig,
                    },
                ],
            },
            {
                path: PATHS.auth.index,
                element: <AuthLayout />,
                children: authConfig,
            },
        ],
    },
];
