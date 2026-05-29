import { useEffect, useState, type FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { IconReload } from '@/assets/svg';
import { Button } from '@/ui/Button/Button';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { auth } from '@/firebase';
import { verifyByEmail } from '@/services/auth.service';
import { useSignUpFormErrorHelper } from '../../../SignUpForm.error.helper';

const cn = classNames.bind(styles);

export const Verify: FC = () => {
    const [isLoadingResend, setIsLoadingResend] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const [isResended, setIsResended] = useState<boolean>(false);
    const { step } = useSignUpFormContext();
    const handleError = useSignUpFormErrorHelper();
    const currentUser = auth.currentUser;
    const disabled = timeLeft > 0;

    const resendEmail = async () => {
            if (isResended || !currentUser) return;
    
            try {
                setIsLoadingResend(true);
    
                await verifyByEmail(currentUser);
    
                setIsResended(true);
            } catch (error: unknown) {
                handleError(error, 'Authentication Error')
    
                setTimeLeft(30);
            } finally {
                setIsLoadingResend(false);
            }
        };

    useEffect(() => {
        if (timeLeft <= 0) return;
        if (step !== 3) return;
        if (isResended) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isResended, step]);

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
