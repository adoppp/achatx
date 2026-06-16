/* eslint-disable react-refresh/only-export-components */

import { SignUpFormProvider } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

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

export const ROUTE_URLS = {
    auth: {
        signIn: () => `/auth/${PATHS.auth.signIn}`,
        signUp: () => `/auth/${PATHS.auth.signUp}`,
        resetPassword: () => `/auth/${PATHS.auth.resetPassword}`,
    },
    app: {
        chats: () => `/app/${PATHS.app.chats}`,
        chat: (id: number) => `/app/${PATHS.app.chat}/${id}`,
        settings: () => `/app/${PATHS.app.settings}`,
        profile: () => `/app/${PATHS.app.settings}/${PATHS.app.profile}`
    }
} as const;

export const ABSOLUTE_URLS = {
    auth: {
        signIn: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signIn()}`,
        signUp: () => `${FRONTEND_URL}${ROUTE_URLS.auth.signUp()}`,
        resetPassword: () => `${FRONTEND_URL}${ROUTE_URLS.auth.resetPassword()}`,
    },
    app: {
        chats: () => `${FRONTEND_URL}${ROUTE_URLS.app.chats}`,
        chat: (id: number) => `${FRONTEND_URL}${ROUTE_URLS.app.chat(id)}`,
        settings: () => `${FRONTEND_URL}${ROUTE_URLS.app.settings()}`,
        profile: () => `${FRONTEND_URL}${ROUTE_URLS.app.profile()}`
    }
} as const;

// Layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'));
const SettingsLayout = lazy(() => import('@/layouts/SettingsLayout/SettingsLayout'));

// Pages
const ChatPage = lazy(() => import('@/pages/app/ChatPage/ChatPage'));
const ChatsPage = lazy(() => import('@/pages/app/ChatsPage/ChatsPage'));
const SignInPage = lazy(() => import('@/pages/auth/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage/SignUpPage'));
const ProfilePage = lazy(() => import('@/pages/app/settings/ProfilePage/ProfilePage'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPasswordPage/ResetPasswordPage'));
const ActionPage = lazy(() => import('@/pages/auth/ActionPage/ActionPage'));

export const appConfig: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: PATHS.app.chats,
                element: <ChatsPage />,
            },
            {
                path: PATHS.app.chat,
                element: <ChatPage />,
            },
        ],
    },
    {
        path: PATHS.app.settings,
        element: <SettingsLayout />,
        children: [
            {
                path: 'profile',
                element: <ProfilePage />,
            },
        ],
    },
];

export const authConfig: RouteObject[] = [
    {
        path: PATHS.auth.signIn,
        element: <SignInPage />,
    },
    {
        path: PATHS.auth.signUp,
        element: (
            <SignUpFormProvider>
                <SignUpPage />
            </SignUpFormProvider>
        ),
    },
    {
        path: PATHS.auth.resetPassword,
        element: <ResetPasswordPage />
    },
    {
        path: 'action',
        element: <ActionPage />
    }
];
