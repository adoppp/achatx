import { useModalContext } from "@/components/Modal/ModalProvider";
import { firebaseErrorMap } from "@/firebase/error.config";
import { FirebaseError } from "firebase/app";

export const useSignUpFormErrorHelper = () => {
    const { openModal, closeModal } = useModalContext();
    
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
    }
};