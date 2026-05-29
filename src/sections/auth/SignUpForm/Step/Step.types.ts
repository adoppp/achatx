import type { FormEvent } from 'react';

import type {
    ErrorState,
    FieldTypes,
    FormState,
} from '@/sections/auth/SignUpForm/SignUpForm.types';

// Base step props
export type BaseStepProps = {
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
