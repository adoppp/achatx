import { useEffect, type FC } from "react";
import { useSearchParams } from "react-router";
import { ResetPasswordAction } from "./ResetPasswordAction/ResetPasswordAction";
import { VerifyEmailAction } from "./VerifyEmailAction/VerifyEmailAction";
// import classNames from "classnames/bind";
// import styles from '@/sections/auth/Action/Action.module.scss';
import { ActionWrapper } from "./ActionWrapper/ActionWrapper";
import { useModalContext } from "@/components/Modal/ModalProvider";

// const cn = classNames.bind(styles);

export const Action: FC = () => {
    const { openModal, closeModal } = useModalContext();
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    const code = searchParams.get('oobCode');

    useEffect(() => {
        if (!mode || !code) {
            openModal({
                type: 'error',
                modalProps: {
                    title: 'Invalid reset link',
                    message: 'Reset link is invalid or expired',
                    button: {
                        label: 'Ok',
                        onClick: () => closeModal()
                    }
                }
            })
        }
    }, [mode, code])

    switch (mode) {
        case 'verifyEmail':
            return (
                <ActionWrapper>
                    <VerifyEmailAction />
                </ActionWrapper>
            );

        case 'resetPassword':
            return (
                <ActionWrapper>
                    <ResetPasswordAction />
                </ActionWrapper>
            );

        default:
            return <div>No action found</div>;
    }
}