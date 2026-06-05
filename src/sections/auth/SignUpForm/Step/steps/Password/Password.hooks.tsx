import { useId, type FormEvent, type ReactNode } from 'react';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';
import { signUpAuth, verifyByEmail } from '@/services/auth.service';
import { useAuthErrorHelper } from '@/sections/auth/authError.helper';
import { useModalContext } from '@/components/Modal/ModalProvider';
import type { IsPasswordValid } from '../../../SignUpForm.types';
import { PasswordValidationItem } from './PasswordValidationItem';

export const usePassword = () => {
    const formId = useId();

    const { 
        step, 
        maxStep, 
        formState, 
        errorState, 
        setIsLoading, 
        handleOnChange, 
        canGoNext, 
        _prev, 
        _next 
    } = useSignUpFormContext();
    const { openModal, closeModal } = useModalContext();
    const handleError = useAuthErrorHelper({ openModal, closeModal });

    const passwdErrors = errorState.password;
    const isPasswordValid = Object.values(passwdErrors).every(Boolean);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = Object.values(errorState.password).every(Boolean);
        const isErrors = Object.values(errorState).some((value) =>
            typeof value === 'string' ? true : false,
        );

        if (isValid && !isErrors) {
            try {
                setIsLoading(true);

                const user = await signUpAuth(formState);

                await verifyByEmail(user);

                setIsLoading(false);

                _next();
            } catch (error: unknown) {
                handleError(error, 'Authentication Error')
            } finally {
                setIsLoading(false);
            }
        }
    };
    
    const items: ReactNode = Object.entries(passwdErrors).map(([key, isValid]) => {
        const typedKey = key as keyof IsPasswordValid;

        return <PasswordValidationItem key={key} typedKey={typedKey} isValid={isValid} />;
    });

    return {
        step,
        maxStep,
        formState,
        errorState,
        formId,
        isPasswordValid,
        items,
        _prev,
        _next,
        canGoNext,
        handleOnChange,
        handleSubmit,
    }
}