import { createContext, useContext, useState, type FC, type ReactNode } from "react";

import type { ErrorFields, ErrorState, FieldTypes, FormState, StepType } from "@/sections/auth/SignUpForm/SignUpForm.types";
import { STEPS, stepsData } from "@/sections/auth/SignUpForm/SignUpForm.config";
import { emailRegex } from "@/constants/regex";

interface SignUpFormContextProps {
    step: StepType;
    maxStep: number;
    isLoading: boolean;
    formState: FormState,
    errorState: ErrorState,
    ActiveStepComponent: FC<any>,
    isPasswordValid: boolean,
    canGoNext: () => boolean,
    handleOnChange: (field: FieldTypes) => (value: string) => void,
    setIsLoading: (value: boolean) => void;
    _prev: () => void;
    _next: () => void;
};

const SignUpFormContext = createContext<SignUpFormContextProps | null>(null);

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

export const SignUpFormProvider: FC<{ children: ReactNode }>  = ({ children }) => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorsState);
    const [step, setStep] = useState<StepType>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const maxStep = STEPS.length;

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

    const _prev = () => setStep((s) => Math.max(1, s - 1) as StepType);

    const _next = () => {
        setStep((s) => Math.min(maxStep, s + 1) as StepType);
    };

    return (
        <SignUpFormContext.Provider value={
            {
                step, 
                maxStep, 
                isLoading, 
                formState,
                errorState,
                ActiveStepComponent,
                isPasswordValid,
                canGoNext,
                handleOnChange,
                setIsLoading, 
                _prev, 
                _next
            }
        }>
            {children}
        </SignUpFormContext.Provider>
    );
};

export const useSignUpFormContext = (): SignUpFormContextProps => {
    const context = useContext(SignUpFormContext);
    if (!context) {
        throw new Error('useSignUpFormContext must be used inside SignUpFormProvider');
    }
    return context;
};