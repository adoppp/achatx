import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Input } from '@/ui/Input/Input';
import { Button } from '@/ui/Button/Button';
import type { BaseStepFormProps } from '@/sections/auth/SignUpForm/Step/Step.types';

const cn = classNames.bind(styles);

export const Personal: FC<BaseStepFormProps> = ({
    formState,
    errorState,
    step,
    maxStep,
    _next,
    canGoNext,
    onChange,
}) => {
    return (
        <>
            <div className={cn('signup__content')}>
                <form className={cn('signup__form')}>
                    <Input
                        label="Username"
                        value={formState.username}
                        onChange={onChange('username')}
                        error={errorState.username}
                    />

                    <Input
                        label="Email"
                        type="email"
                        value={formState.email}
                        onChange={onChange('email')}
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
