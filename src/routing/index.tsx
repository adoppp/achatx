import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/layouts/AppLayout/AppLayout';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';
import { appConfig, authConfig } from '@/routing/routing.config';

export const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            children: appConfig,
        },
        {
            path: 'auth',
            element: <AuthLayout />,
            children: authConfig,
        },
    ],
    {
        basename: '/achatx',
    },
);
