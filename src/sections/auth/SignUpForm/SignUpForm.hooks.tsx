import { useState, type FormEvent } from 'react';

import { emailRegex } from '@/constants/regex';
import type {
    ErrorFields,
    ErrorState,
    FieldTypes,
    FormState,
} from '@/sections/auth/SignUpForm/SignUpForm.types';
import { signUpAuth, verifyByEmail } from '@/services/auth.service';
import { stepsData } from '@/sections/auth/SignUpForm/SignUpForm.config';
import { useSignUpFormContext } from './SignUpFormProvider';
import { useAuthErrorHelper } from '../authError.helper';
import { useModalContext } from '@/components/Modal/ModalProvider';

const initialFormState: FormState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const initialErrorsState: ErrorState = {
    username: null,
    email: null,
    password: {
        isEnoughCharacters: false,
        isOneUppercase: false,
        isOneLowercase: false,
        isOneNumber: false,
        isOneSpecialSymbol: false,
    },
    confirmPassword: null
};

export const useSignUpForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorsState);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { step, _next } = useSignUpFormContext();
    const { openModal, closeModal } = useModalContext();
    const handleError = useAuthErrorHelper({ openModal, closeModal });
    const isPasswordValid = Object.values(errorState.password).every(Boolean);
    const ActiveStepComponent = stepsData[step].component;

    const canGoNext = () => {
        if (step === 1) {
            return Boolean(
                !errorState.username && !errorState.email && formState.username.trim() !== '' && formState.email.trim() !== '',
            );
        }

        if (step === 2) {
            return Object.values(errorState.password).every(Boolean)  && !errorState.confirmPassword;
        }

        return true;
    };

    const handleOnChange = (field: FieldTypes) => (value: string) => {
        setFormState((prev) => {
            const next = { ...prev, [field]: value };

            queueMicrotask(() => {
                validation(field, next);
            });

            return next;
        });
    };

    const validation = (field: ErrorFields, state: FormState) => {
        const error = validateField(field, state);

        setErrorState((prev) => ({ ...prev, [field]: error }));
    };

    const validateField = (field: ErrorFields, state: FormState) => {
        const value = state[field].trim();

        if (value.length === 0 && field !== 'password') {
            return 'Field can not be empty';
        }

        switch (field) {
            case 'username':
                if (value.length < 5) return 'Minimal 5 characters';
                return null;

            case 'email':
                if (!value.toLowerCase().match(emailRegex)) return 'Invalid email';
                return null;

            case 'password':
                return {
                    isEnoughCharacters: value.length >= 12,
                    isOneUppercase: /[A-Z]/.test(value),
                    isOneLowercase: /[a-z]/.test(value),
                    isOneNumber: /[0-9]/.test(value),
                    isOneSpecialSymbol: /[^A-Za-z0-9]/.test(value),
                };

            case 'confirmPassword':
                if (value !== state.password.trim()) return 'The password does not match';
                return null;

            default:
                return null;
        }
    };

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

    return {
        formState,
        errorState,
        isLoading,
        ActiveStepComponent,
        isPasswordValid,
        canGoNext,
        handleOnChange,
        handleSubmit,
    };
};
