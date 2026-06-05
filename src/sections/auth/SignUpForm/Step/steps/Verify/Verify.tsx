import { type FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { IconReload } from '@/assets/svg';
import { Button } from '@/ui/Button/Button';
import { useVerify } from '@/sections/auth/SignUpForm/Step/steps/Verify/Verify.hooks';

const cn = classNames.bind(styles);

export const Verify: FC = () => {
    const {
        step,
        timeLeft,
        disabled,
        isResended,
        isLoadingResend,
        resendEmail
    } = useVerify();

    return (
        <>
            <div className={cn('signup__button', `signup__button-${step}`)}>
                <Button
                    onClick={resendEmail}
                    rightIcon={<IconReload />}
                    isLoading={isLoadingResend}
                    disabled={disabled || isResended}
                >
                    Resend {timeLeft === 0 ? '' : timeLeft}
                </Button>
            </div>
        </>
    );
};
