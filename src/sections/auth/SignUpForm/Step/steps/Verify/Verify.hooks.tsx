import { useEffect, useState } from 'react';

import { auth } from '@/firebase';
import { useAppDispatch } from '@/redux/redux.hooks';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { verifyByEmail } from '@/services/auth.service';
import { errorHelper } from '@/utils/errorHelper';

export const useVerify = () => {
    const [isLoadingResend, setIsLoadingResend] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const [isResended, setIsResended] = useState<boolean>(false);
    const { step } = useSignUpFormContext();
    const dispatch = useAppDispatch();
    const currentUser = auth.currentUser;
    const disabled = timeLeft > 0;

    const resendEmail = async () => {
        if (isResended || !currentUser) return;

        try {
            setIsLoadingResend(true);

            await verifyByEmail(currentUser);

            setIsResended(true);
        } catch (error: unknown) {
            errorHelper(dispatch, error, 'Authentication Error');

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

    return {
        step,
        timeLeft,
        disabled,
        isResended,
        isLoadingResend,
        resendEmail,
    };
};
