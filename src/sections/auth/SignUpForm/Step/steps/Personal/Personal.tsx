import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Input } from '@/ui/Input/Input';
import { Button } from '@/ui/Button/Button';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { useNavigate } from 'react-router';
import { useNavigatePaths } from '@/routing/navigationHelpers.config';

const cn = classNames.bind(styles);

export const Personal: FC = () => {
    const { 
            formState,
            errorState, 
            step, 
            maxStep, 
            _next, 
            canGoNext,
            handleOnChange 
        } = useSignUpFormContext();
    const navigate = useNavigate();

    return (
        <>
            <div className={cn('signup__content')}>
                <form className={cn('signup__form')}>
                    <Input
                        label="Username"
                        value={formState.username}
                        onChange={handleOnChange('username')}
                        error={errorState.username}
                    />

                    <Input
                        label="Email"
                        type="email"
                        value={formState.email}
                        onChange={handleOnChange('email')}
                        error={errorState.email}
                    />
                </form>
            </div>

            <div className={cn('signup__button')}>
                <Button
                    variant="secondary"
                    onClick={() => {
                        navigate(useNavigatePaths.auth.signIn(), { viewTransition: true });
                    }}
                >
                    Log in
                </Button>
                <Button onClick={_next} disabled={step === maxStep || !canGoNext()}>
                    Next step
                </Button>
            </div>
        </>
    );
};
