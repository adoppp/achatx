import { type FC } from "react";
import classNames from "classnames/bind";

import styles from '@/sections/auth/SignInForm/SignInForm.module.scss';

import { Input } from "@/components/ui/Input/Input";
import { InputPassword } from "@/components/ui/InputPassword/InputPassword";
import { Button } from "@/components/ui/Button/Button";
import { InputCheckbox } from "@/components/ui/InputCheckbox/InputCheckbox";
import logoPath from '@/assets/img/logo_white.png';
import { NavLink } from "react-router";
import { useSignInForm } from "@/sections/auth/SignInForm/SignInForm.hooks";
import { useNavigatePaths } from '@/routing/navigationHelpers.config';

const cn = classNames.bind(styles);

export const SignInForm: FC = () => {
    const {
        email,
        password,
        errorState,
        isRememberMe,
        setIsRememberMe,
        isLoading,
        handleChange,
        handleSubmit
    } = useSignInForm();

    return (
        <div className={cn('signin')}>
            <div className={cn('signin__container')}>
                <div className={cn('signin__header')}>
                    <div className={cn('signin__header-box')}>
                        <img src={logoPath} alt="logo" className={cn('signin__header-logo')} />
                    </div>
                    <h2 className={cn('signin__header-title')}>Log in into your account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={cn('signin__inputs-container')}>
                        <Input
                            label="Email"
                            value={email}
                            onChange={handleChange('email')}
                            error={errorState.email}
                        />
                        <InputPassword
                            label="Password"
                            value={password}
                            onChange={handleChange('password')}
                            error={errorState.password}
                        />
                    </div>
                    <div className={cn('signin__user-helpers')}>
                        <InputCheckbox
                            label="Remeber me"
                            isChecked={isRememberMe}
                            onChange={() => setIsRememberMe(!isRememberMe)}
                        />
                        <NavLink
                            to={useNavigatePaths.auth.resetPassword()}
                            viewTransition
                            className={cn('signin__link')}
                        >
                            Forgot password?
                        </NavLink>
                    </div>
                    <Button
                        customClassName={cn('signin__button')}
                        disabled={!!Object.values(errorState).some((e) => e !== null)}
                        isLoading={isLoading}
                    >
                        Sign in
                    </Button>
                </form>
                <p className={cn('signin__register')}>
                    Don't have an account?{' '}
                    <NavLink
                        to={useNavigatePaths.auth.signUp()}
                        className={cn('signin__link')}
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};