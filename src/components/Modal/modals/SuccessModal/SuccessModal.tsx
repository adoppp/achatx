import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/Modal/modals/SuccessModal/SuccessModal.module.scss';

import { IconArrowRight, IconCheckMark } from '@/assets/svg';
import { useModalContext } from '@/components/Modal/ModalProvider';
import { Button } from '@/ui/Button/Button';

const cn = classNames.bind(styles);

export const SuccessModal: FC = () => {
    const modalContext = useModalContext();

    if (!modalContext) {
        return <div>Can not Load modal Context</div>;
    }

    return (
        <>
            <span className={cn('success__icon')}>
                <IconCheckMark />
            </span>
            <h2 className={cn('success__title')}>{modalContext.modal.modalProps?.title}</h2>
            <p className={cn('success__message')}>{modalContext.modal.modalProps?.message}</p>
            {modalContext.modal.modalProps?.button && (
                <div className={cn('success__button')}>
                    <Button
                        onClick={modalContext.modal.modalProps.button.onClick}
                        rightIcon={<IconArrowRight />}
                    >
                        {modalContext.modal.modalProps?.button?.label}
                    </Button>
                </div>
            )}
        </>
    );
};
