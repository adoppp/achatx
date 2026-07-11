import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/layouts/AppLayout/AppLayout';
import { globalConfig } from '@/routing/routing.config';

export const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            children: globalConfig
        },
    ],
    {
        basename: '/achatx',
    },
);
