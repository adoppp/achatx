import { resetPassword } from "@/services/auth.service";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { useState, type FC, type FormEvent } from "react";
import classNames from "classnames/bind";

import styles from '@/sections/auth/ResetPassword/ResetPassword.module.scss';
import { IconAnimatedEmail, IconArrowLeft } from "@/assets/svg";
import { useNavigate } from "react-router";
import { emailRegex } from "@/constants/regex";
import { useModalContext } from "@/components/Modal/ModalProvider";
import { useAuthErrorHelper } from "../authError.helper";

const cn = classNames.bind(styles);

export const ResetPassword: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { openModal, closeModal } = useModalContext();
    const handleError = useAuthErrorHelper({ openModal, closeModal });

    const handleChange = (value: string) => {
        setEmail(() => {
            queueMicrotask(() => {
                setEmailError(validation(value));
            });

            return value;
        });
    };

    const validation = (value: string) => {
        if (value.trim().length === 0) return 'Field can not be empty';
        if (!value.trim().toLowerCase().match(emailRegex)) return 'Invalid email';
        return null;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailError === null) {
            try {
                setIsLoading(true);

                await resetPassword(email);

                setEmail('');

                openModal({
                    type: 'success',
                    modalProps: {
                        icon: <IconAnimatedEmail />,
                        title: 'Check your email',
                        message: `We have sent an email to ${email}`,
                        button: {
                            label: 'Go back to sign in',
                            onClick: () => {
                                navigate('/auth/signin')
                                closeModal();
                            } 
                        }
                    }
                })
            } catch (error: unknown) {
                handleError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className={cn('resetpassword')}>
            <div className={cn('resetpassword__container')}>
                <Button customClassName={cn('resetpassword__back')} variant="secondary" size="s" leftIcon={<IconArrowLeft />} onClick={() => navigate(-1)} />
                <div className={cn('resetpassword__description')}>
                    <div className={cn('resetpassword__description--icon')}>
                        <IconAnimatedEmail />
                    </div>
                    <h2 className={cn('resetpassword__description--title')}>Enter your email</h2>
                    <p className={cn('resetpassword__description--description')}>
                        We'll send you an email with reset link
                    </p>
                </div>
                <form className={cn('resetpassword__form')} onSubmit={handleSubmit} >
                    <Input
                        label="Email"
                        value={email}
                        onChange={handleChange}
                        error={emailError}
                    />
                    <Button customClassName={cn('resetpassword__button')} isLoading={isLoading} disabled={emailError !== null || email.trim() === ''} >
                        Send reset email
                    </Button>
                </form>
            </div>
        </div>
    )
}