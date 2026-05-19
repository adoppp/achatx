import { useEffect, useState, type FormEvent } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { emailRegex } from '@/constants/regex';
import { STEPS, stepComponents, type Step } from '@/sections/auth/SignUpForm/SignUpForm.config';
import type {
    ErrorFields,
    ErrorState,
    FieldTypes,
    FormState,
    IsPasswordValid,
} from '@/sections/auth/SignUpForm/SignUpForm.types';
import { signUpAuth, verifyByEmail } from '@/services/auth.service';
import { useModalContext } from '@/components/Modal/ModalProvider';
import { firebaseErrorMap } from '@/firebase/error.config';
import { auth } from '@/firebase';

const initialFormState: FormState = {
    username: '',
    email: '',
    password: '',
};

const initialErrorsState: ErrorState = {
    username: null,
    email: null,
};

const initialIsPasswordValid: IsPasswordValid = {
    isEightCharacters: false,
    isOneUppercase: false,
    isOneLowercase: false,
    isOneNumber: false,
    isOneSpecialSymbol: false,
};

export const useSignUpForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorsState);
    const [passwdErrors, setPasswdErrors] = useState<IsPasswordValid>(initialIsPasswordValid);
    const [step, setStep] = useState<Step>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingResend, setIsLoadingResend] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const [isResended, setIsResended] = useState<boolean>(false);
    const { openModal, closeModal } = useModalContext();
    const currentUser = auth.currentUser;
    const maxStep = STEPS.length;
    const ActiveStepComponent = stepComponents[step];

    const _prev = () => setStep((s) => Math.max(1, s - 1) as Step);

    const _next = () => {
        if (!canGoNext()) return;

        setStep((s) => Math.min(maxStep, s + 1) as Step);
    };

    const canGoNext = () => {
        if (step === 1) {
            return Boolean(
                !errorState.username && !errorState.email && formState.username && formState.email,
            );
        }

        if (step === 2) {
            return Object.values(passwdErrors).every(Boolean);
        }

        return true;
    };

    const handleOnChange = (field: FieldTypes) => (value: string) => {
        setFormState((prev) => {
            const next = { ...prev, [field]: value };

            queueMicrotask(() => {
                if (field === 'password') {
                    setPasswdErrors(validatePassword(value));
                } else {
                    validation(field, next);
                }
            });

            return next;
        });
    };

    const validatePassword = (password: string): IsPasswordValid => {
        return {
            isEightCharacters: password.length >= 8,
            isOneUppercase: /[A-Z]/.test(password),
            isOneLowercase: /[a-z]/.test(password),
            isOneNumber: /[0-9]/.test(password),
            isOneSpecialSymbol: /[^A-Za-z0-9]/.test(password),
        };
    };

    const validation = (field: ErrorFields, state: FormState) => {
        const error = validateField(field, state);

        setErrorState((prev) => ({ ...prev, [field]: error }));
    };

    const validateField = (field: ErrorFields, state: FormState): string | null => {
        const value = state[field].trim();

        if (value.length === 0) {
            return 'Field can not be empty';
        }

        switch (field) {
            case 'username':
                if (value.length < 5) return 'Minimal 5 characters';
                return null;

            case 'email':
                if (!value.toLowerCase().match(emailRegex)) return 'Invalid email';
                return null;

            default:
                return null;
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = Object.values(passwdErrors).every(Boolean);
        const isErrors = Object.values(errorState).some((value) => value !== null);

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
                        modalProps: { title: 'Authentication Error', message: firebaseErrorMap[error.code] ?? firebaseErrorMap.default, button: { label: 'Ok', onClick: closeModal } },
                    });
                } else if (error instanceof Error) {
                    openModal({
                        type: 'error',
                        modalProps: { title: 'Unexpected error', message: error.message, button: { label: 'Ok', onClick: closeModal } },
                    });
                }

            } finally {
                setIsLoading(false);
            }
        }
    };

    const resendEmail = async () => {
        if (isResended || !currentUser) return;

        try {
            setIsLoadingResend(true);

            await verifyByEmail(currentUser);

            setIsResended(true);
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                openModal({
                    type: 'error',
                    modalProps: { title: 'Authentication Error', message: firebaseErrorMap[error.code] ?? firebaseErrorMap.default, button: { label: 'Ok', onClick: closeModal } },
                });
            } else if (error instanceof Error) {
                openModal({
                    type: 'error',
                    modalProps: { title: 'Unexpected error', message: error.message, button: { label: 'Ok', onClick: closeModal } },
                });
            }

            setTimeLeft(30);
        } finally {
            setIsLoadingResend(false);
        }
    };

    useEffect(() => {
        if (timeLeft <= 0) return;
        if (step !== 3 ) return;
        if (isResended) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isResended, step]);

    return {
        formState,
        errorState,
        passwdErrors,
        isLoading,
        step,
        maxStep,
        timeLeft,
        isResended,
        isLoadingResend,
        resendEmail,
        ActiveStepComponent,
        canGoNext,
        _prev,
        _next,
        handleOnChange,
        handleSubmit,
    };
};
