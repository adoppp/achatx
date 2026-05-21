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
        step,
        maxStep,
        isLoading,
        isResended,
        timeLeft,
        isLoadingResend,
        ActiveStepComponent,
        isPasswordValid,
        resendEmail,
        canGoNext,
        _prev,
        _next,
        handleOnChange,
        handleSubmit,
    } = useSignUpForm();

    return (
        <div className={cn('signup')}>
            <div className={cn('signup__content')}>
                <Progress step={step} />

                <Step isLoading={isLoading}>
                    <Step.Header step={step} isActive={isPasswordValid} />
                    <ActiveStepComponent
                        formState={formState}
                        errorState={errorState}
                        step={step}
                        maxStep={maxStep}
                        isResended={isResended}
                        timeLeft={timeLeft}
                        isLoadingResend={isLoadingResend}
                        resendEmail={resendEmail}
                        _next={_next}
                        _prev={_prev}
                        canGoNext={canGoNext}
                        onChange={handleOnChange}
                        onSubmit={handleSubmit}
                    />
                </Step>
            </div>
        </div>
    );
};
