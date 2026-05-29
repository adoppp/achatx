import { useEffect, useState, type FormEvent } from 'react';
import { FirebaseError } from 'firebase/app';

import { emailRegex } from '@/constants/regex';
import type {
    ErrorFields,
    ErrorState,
    FieldTypes,
    FormState,
} from '@/sections/auth/SignUpForm/SignUpForm.types';
import { signUpAuth, verifyByEmail } from '@/services/auth.service';
import { useModalContext } from '@/components/Modal/ModalProvider';
import { firebaseErrorMap } from '@/firebase/error.config';
import { stepsData } from '@/sections/auth/SignUpForm/SignUpForm.config';
import { useSignUpFormContext } from './SignUpFormProvider';

const initialFormState: FormState = {
    username: '',
    email: '',
    password: '',
};

const initialErrorsState: ErrorState = {
    username: null,
    email: null,
    password: {
        isEightCharacters: false,
        isOneUppercase: false,
        isOneLowercase: false,
        isOneNumber: false,
        isOneSpecialSymbol: false,
    },
};

export const useSignUpForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorsState);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { openModal, closeModal } = useModalContext();
    const { step, _next } = useSignUpFormContext();
    const isPasswordValid = Object.values(errorState.password).every(Boolean);
    const ActiveStepComponent = stepsData[step].component;

    const canGoNext = () => {
        if (step === 1) {
            return Boolean(
                !errorState.username && !errorState.email && formState.username && formState.email,
            );
        }

        if (step === 2) {
            return Object.values(errorState.password).every(Boolean);
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
                    isEightCharacters: value.length >= 8,
                    isOneUppercase: /[A-Z]/.test(value),
                    isOneLowercase: /[a-z]/.test(value),
                    isOneNumber: /[0-9]/.test(value),
                    isOneSpecialSymbol: /[^A-Za-z0-9]/.test(value),
                };

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
                if (error instanceof FirebaseError) {
                    openModal({
                        type: 'error',
                        modalProps: {
                            title: 'Authentication Error',
                            message: firebaseErrorMap[error.code] ?? firebaseErrorMap.default,
                            button: { label: 'Ok', onClick: closeModal },
                        },
                    });
                } else if (error instanceof Error) {
                    openModal({
                        type: 'error',
                        modalProps: {
                            title: 'Unexpected error',
                            message: error.message,
                            button: { label: 'Ok', onClick: closeModal },
                        },
                    });
                }
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
