import type { stepsData } from "@/sections/auth/SignUpForm/SignUpForm.config";
import type { IsPasswordValid } from "../auth.types";

export type StepType = keyof typeof stepsData;

export interface FormState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type FieldTypes = keyof FormState;

export interface ErrorState {
    username: string | null;
    email: string | null;
    password: IsPasswordValid;
    confirmPassword: string | null;
}

export type ErrorFields = keyof ErrorState;
