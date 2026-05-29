import type { stepsData } from "@/sections/auth/SignUpForm/SignUpForm.config";

export type StepType = keyof typeof stepsData;

export interface FormState {
    username: string;
    email: string;
    password: string;
}

export type FieldTypes = keyof FormState;

export interface ErrorState {
    username: string | null;
    email: string | null;
    password: IsPasswordValid;
}

export interface IsPasswordValid {
    isEightCharacters: boolean;
    isOneUppercase: boolean;
    isOneLowercase: boolean;
    isOneNumber: boolean;
    isOneSpecialSymbol: boolean;
}

export type ErrorFields = keyof ErrorState;
