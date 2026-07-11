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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ModalProvider>
                <RouterProvider router={router} />
                <ModalWrapper />
            </ModalProvider>
        </Provider>
    </StrictMode>,
);
