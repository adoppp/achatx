import type { FormEvent } from 'react';

import type { Step } from '@/sections/auth/SignUpForm/SignUpForm.config';
import type {
    ErrorState,
    FieldTypes,
    FormState,
} from '@/sections/auth/SignUpForm/SignUpForm.types';

// Base step props
export type BaseStepProps = {
    step: Step;
    maxStep: number;
    _next: () => void;
    _prev: () => void;
    canGoNext: () => boolean;
};

// Base props for from steps
export type BaseStepFormProps = BaseStepProps & {
    formState: FormState;
    errorState: ErrorState;
    onChange: (field: FieldTypes) => (value: string) => void;
};

// Password props
export type StepPasswordProps = BaseStepFormProps & {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

// Verify props
export type VerifyStepProps = BaseStepProps & {
    isResended: boolean;
    timeLeft: number;
    isLoadingResend: boolean;
    resendEmail: () => void;
};
