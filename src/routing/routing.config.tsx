/* eslint-disable react-refresh/only-export-components */

import { PATHS } from '@/routing/path.config';
import { SignUpFormProvider } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { PrivateRoute } from './routes/PrivateRoute';

// Layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/AuthLayout/AuthLayout'));
const SettingsLayout = lazy(() => import('@/layouts/SettingsLayout/SettingsLayout'));

// Pages

// auth
const SignInPage = lazy(() => import('@/pages/auth/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage/SignUpPage'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPasswordPage/ResetPasswordPage'));

// app
const ChatPage = lazy(() => import('@/pages/app/ChatPage/ChatPage'));
const ChatsPage = lazy(() => import('@/pages/app/ChatsPage/ChatsPage'));

// settings
const ProfilePage = lazy(() => import('@/pages/app/settings/ProfilePage/ProfilePage'));
const PrivacyPage = lazy(() => import('@/pages/app/settings/PrivacyPage/PrivacyPage'));
const NotificationsPage = lazy(
    () => import('@/pages/app/settings/NotificationsPage/NotificationsPage'),
);
const ThemePage = lazy(() => import('@/pages/app/settings/ThemePage/ThemePage'));
const LanguagePage = lazy(() => import('@/pages/app/settings/LanguagePage/LanguagePage'));
const HelpPage = lazy(() => import('@/pages/app/settings/HelpPage/HelpPage'));
const AboutPage = lazy(() => import('@/pages/app/settings/AboutPage/AboutPage'));

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
];
