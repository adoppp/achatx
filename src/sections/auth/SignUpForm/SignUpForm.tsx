import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Progress } from '@/sections/auth/SignUpForm/Progress/Progress';
import { useSignUpForm } from '@/sections/auth/SignUpForm/SignUpForm.hooks';
import { Step } from '@/sections/auth/SignUpForm/Step/Step';

const cn = classNames.bind(styles);

export const SignUpForm: FC = () => {
    const {
        formState,
        errorState,
        isLoading,
        ActiveStepComponent,
        isPasswordValid,
        canGoNext,
        handleOnChange,
        handleSubmit,
    } = useSignUpForm();

    return (
        <div className={cn('signup')}>
            <div className={cn('signup__content')}>
                <Progress />

                <Step isLoading={isLoading}>
                    <Step.Header isActive={isPasswordValid} />
                    <ActiveStepComponent
                        formState={formState}
                        errorState={errorState}
                        canGoNext={canGoNext}
                        onChange={handleOnChange}
                        onSubmit={handleSubmit}
                    />
                </Step>
            </div>
        </div>
    );
};
