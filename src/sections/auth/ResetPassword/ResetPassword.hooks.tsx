import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

import { resetPassword } from "@/services/auth.service";
import { emailRegex } from "@/constants/regex";
import { useModalContext } from "@/components/Modal/ModalProvider";
import { useAuthErrorHelper } from "@/sections/auth/authError.helper";
import { IconCheckMark } from "@/assets/svg";

export const useResetPassword = () => {
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
                        icon: <IconCheckMark />,
                        title: 'Check your email',
                        message: `We have sent an email to ${email}`,
                        button: {
                            label: 'Go back to sign in',
                            onClick: () => {
                                navigate(`/AChatX/auth/signin`);
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

    return {
        email,
        emailError,
        isLoading,
        handleChange,
        handleSubmit
    }
}