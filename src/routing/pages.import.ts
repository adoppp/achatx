import { lazy } from 'react';

// Layouts
export const AppLayout = lazy(() => import('@/layouts/AppLayout/AppLayout'));
export const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'));
export const AuthLayout = lazy(() => import('@/layouts/AuthLayout/AuthLayout'));
export const SettingsLayout = lazy(() => import('@/layouts/SettingsLayout/SettingsLayout'));

// Pages

// auth
export const SignInPage = lazy(() => import('@/pages/auth/SignInPage/SignInPage'));
export const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage/SignUpPage'));
export const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPasswordPage/ResetPasswordPage'));

// app
export const ChatPage = lazy(() => import('@/pages/app/ChatPage/ChatPage'));
export const ChatsPage = lazy(() => import('@/pages/app/ChatsPage/ChatsPage'));

// settings
export const ProfilePage = lazy(() => import('@/pages/app/settings/ProfilePage/ProfilePage'));
export const PrivacyPage = lazy(() => import('@/pages/app/settings/PrivacyPage/PrivacyPage'));
export const NotificationsPage = lazy(
    () => import('@/pages/app/settings/NotificationsPage/NotificationsPage'),
);
export const ThemePage = lazy(() => import('@/pages/app/settings/ThemePage/ThemePage'));
export const LanguagePage = lazy(() => import('@/pages/app/settings/LanguagePage/LanguagePage'));
export const HelpPage = lazy(() => import('@/pages/app/settings/HelpPage/HelpPage'));
export const AboutPage = lazy(() => import('@/pages/app/settings/AboutPage/AboutPage'));