import { createContext, useContext, useState, type FC, type ReactNode } from 'react';

import type {
    ModalState,
    ModalContextType,
    ModalActionProps,
} from '@/components/Modal/Modal.types';

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<ModalState>({ type: null });

    const openModal = (propsModal: ModalActionProps): void => {
        setModal(propsModal);
    };

    const closeModal = (): void => {
        setModal({ type: null });
    };

    return (
        <ModalContext.Provider
            value={{
                modal: modal,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used inside ModalProvider');
    }
    return context;
};
