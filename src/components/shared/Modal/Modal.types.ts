import type { ReactNode } from 'react';

export type ModalType = 'info' | 'success' | 'error' | 'custom' | null;

export type ModalActionsType = Exclude<ModalType, null>;

export interface ModalProps {
    icon?: ReactNode;
    title: string;
    customContent?: ReactNode;
    message: string;
    button?: {
        label: string;
        onClick: () => void;
    };
}

export interface ModalState {
    type: ModalType;
    modalProps?: ModalProps;
}

export interface ModalActionProps {
    type: ModalActionsType;
    modalProps?: ModalProps;
}

export interface ModalContextType {
    modal: ModalState;
    openModal: (modal: ModalActionProps) => void;
    closeModal: () => void;
}
