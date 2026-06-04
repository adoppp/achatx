import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { StepType } from "@/sections/auth/SignUpForm/SignUpForm.types";
import { STEPS } from "./SignUpForm.config";

interface SignUpFormContextProps {
    step: StepType;
    maxStep: number;
    _prev: () => void;
    _next: () => void;
}

const SignUpFormContext = createContext<SignUpFormContextProps | null>(null);

export const SignUpFormProvider: FC<{ children: ReactNode }>  = ({ children }) => {
    const [step, setStep] = useState<StepType>(1);
    const maxStep = STEPS.length;

    const _prev = () => setStep((s) => Math.max(1, s - 1) as StepType);

    const _next = () => {
        setStep((s) => Math.min(maxStep, s + 1) as StepType);
    };

    return (
        <SignUpFormContext.Provider value={{step, maxStep, _prev, _next}}>
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