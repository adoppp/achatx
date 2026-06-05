export interface FormState {
    email: string,
    password: string
};

export type Field = keyof FormState;

export type ErrorState = Record<Field, string | null>;