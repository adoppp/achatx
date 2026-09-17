import { type FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/shared/Modal/Modal.module.scss';

import { useModalContext } from '@/components/shared/Modal/ModalProvider';
import { ModalRoot } from '@/components/shared/Modal/ModalRoot';
import { IconClose } from '@/assets/svg';
import { ErrorModal } from '@/components/shared/Modal/modals/ErrorModal/ErrorModal';
import { SuccessModal } from './modals/SuccessModal/SuccessModal';

const cn = classNames.bind(styles);

export const ModalWrapper: FC = () => {
    const { modal, closeModal } = useModalContext();
    const modalType = modal.type;

    if (modalType === null) return;

    return (
        <ModalRoot>
            <div className={cn('modal')}>
                <div className={cn('modal__box')}>
                    <button onClick={closeModal} className={cn('modal__close')}>
                        <IconClose />
                    </button>
                    {modalType === 'error' && <ErrorModal />}
                    {modalType === 'success' && <SuccessModal />}
                </div>
            </div>
        </ModalRoot>
    );
};
