import type { FC } from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";

import styles from '@/sections/auth/ResetPassword/ResetPassword.module.scss';

import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { IconAnimatedEmail, IconArrowLeft } from "@/assets/svg";
import { useResetPassword } from "@/sections/auth/ResetPassword/ResetPassword.hooks";

const cn = classNames.bind(styles);

export const ResetPassword: FC = () => {
    const {
            email,
            emailError,
            isLoading,
            handleChange,
            handleSubmit
        } = useResetPassword();
    const navigate = useNavigate();

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