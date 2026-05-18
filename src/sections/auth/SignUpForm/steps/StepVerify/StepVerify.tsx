import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import type { VerifyStepProps } from '@/sections/auth/SignUpForm/SignUpForm.types';
import { Button } from '@/ui/Button/Button';
import { stepIcons } from '@/sections/auth/SignUpForm/SignUpForm.config';

const cn = classNames.bind(styles);

export const StepVerify: FC<VerifyStepProps> = ({ step, resendEmail, isResended, timeLeft }) => {
    const StepIcon = step === 3 && stepIcons[step];
    const disabled = timeLeft > 0;

    return (
        <>
            <div className={cn('signup__description')}>
                <div className={cn('signup__description--icon')}>{StepIcon}</div>
                <h2 className={cn('signup__description--title')}>Verify your email</h2>
                <p className={cn('signup__description--description')}>
                    We have send verification link to your email
                </p>
            </div>

            <div className={cn('signup__button', 'verify__button')}>
                <Button onClick={resendEmail} disabled={disabled || isResended}>
                    Resend {timeLeft === 0 ? '' : timeLeft} 
                </Button>
            </div>
        </>
    );
};
