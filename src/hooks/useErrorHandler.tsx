import { useModalContext } from '@/components/Modal/ModalProvider';
import { useAppSelector } from '@/redux/redux.hooks';
import { useEffect } from 'react';

export const useErrorHandler = () => {
    const { openModal, closeModal } = useModalContext();
    const error = useAppSelector((state) => state.error);

    useEffect(() => {
        console.log(error);

        if (error.title && error.message) {
            console.log('OPEN MODAL');
            openModal({
                type: 'error',
                modalProps: {
                    title: error.title,
                    message: error.message,
                    button: { label: 'Ok', onClick: closeModal },
                },
            });
        } else {
            closeModal();
        }
    }, [error]);
};
