import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Input } from '@/ui/Input/Input';
import { Button } from '@/ui/Button/Button';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';

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

            <div className={cn('signup__button', `signup__button-${step}`)}>
                <Button onClick={_next} disabled={step === maxStep || !canGoNext()}>
                    Next step
                </Button>
            </div>
        </>
    );
};
