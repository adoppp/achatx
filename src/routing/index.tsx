import { createBrowserRouter } from 'react-router';

import { globalConfig } from '@/routing/routing.config';

export const router = createBrowserRouter(
    globalConfig,
    {
        basename: '/achatx',
    },
);
