import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import '@/styles/global.scss';
import '@/styles/reset.scss';

import { store } from '@/redux/store';
import { router } from '@/routing';
import { ModalWrapper } from './components/Modal/Modal.wrapper';
import { ModalProvider } from './components/Modal/ModalProvider';
import { ThemeProvider } from './hooks/useTheme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <ModalProvider>
                    <RouterProvider router={router} />
                    <ModalWrapper />
                </ModalProvider>
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
