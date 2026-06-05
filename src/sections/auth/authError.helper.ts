import { FirebaseError } from "firebase/app";

import type { ModalActionProps } from "@/components/Modal/Modal.types";
import { firebaseErrorMap } from "@/firebase/error.config";

interface AuthErrorHelper {
    openModal: (props: ModalActionProps) => void;
    closeModal: () => void
};

export const useAuthErrorHelper = ({ openModal, closeModal }: AuthErrorHelper) => {    
    return (error: unknown, title = 'Unexpected error') => {
        if (error instanceof FirebaseError) {
            openModal({
                type: 'error',
                modalProps: {
                    title: title,
                    message: firebaseErrorMap[error.code] ?? firebaseErrorMap.default,
                    button: { label: 'Ok', onClick: closeModal },
                }, 
            });
        } else if (error instanceof Error) {
            openModal({
                type: 'error',
                modalProps: {
                    title: 'Unexpected error',
                    message: error.message,
                    button: { label: 'Ok', onClick: closeModal },
                },
            });
        }
    };
};