/* eslint-disable react-refresh/only-export-components */

import { PATHS } from '@/routing/path.config';
import { SignUpFormProvider } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { PrivateRoute } from './routes/PrivateRoute';

// Layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/AuthLayout/AuthLayout'));

// Pages
const ChatPage = lazy(() => import('@/pages/app/ChatPage/ChatPage'));
const ChatsPage = lazy(() => import('@/pages/app/ChatsPage/ChatsPage'));
const SignInPage = lazy(() => import('@/pages/auth/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage/SignUpPage'));
const ProfilePage = lazy(() => import('@/pages/app/settings/ProfilePage/ProfilePage'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPasswordPage/ResetPasswordPage'));

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
        path: PATHS.app.profile,
        element: <ProfilePage />,
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
