/* eslint-disable react-refresh/only-export-components */

import { SignUpFormProvider } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { PATHS } from '@/routing/path.config';

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

export const appConfig: RouteObject[] = [
    {
        element: <MainLayout />,
        handle: {
            pageTitle: 'Messages'
        },
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
        handle: {
            pageTitle: 'Settings'
        },
        children: [
            {
                path: PATHS.app.profile,
                element: <ProfilePage />,
            },
        ],
    },
];

export const authConfig: RouteObject[] = [
    {
        path: PATHS.auth.signIn,
        element: <SignInPage />,
        handle: {
            title: 'Sign in'
        }
    },
    {
        path: PATHS.auth.signUp,
        element: (
            <SignUpFormProvider>
                <SignUpPage />
            </SignUpFormProvider>
        ),
        handle: {
            title: 'Sign up'
        }
    },
    {
        path: PATHS.auth.resetPassword,
        element: <ResetPasswordPage />,
        handle: {
            title: 'Reset password'
        } 
    },
];
