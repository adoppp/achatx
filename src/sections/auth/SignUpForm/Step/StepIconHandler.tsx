import type { FC } from 'react';
import { stepsData, type Step } from '@/sections/auth/SignUpForm/SignUpForm.config';

interface StepIconHandlerProps {
    step: Step;
    isActive?: boolean;
}

// handels icons with props
export const StepIconHandler: FC<StepIconHandlerProps> = ({ step, isActive = false }) => {
    switch (step) {
        case 2:
            return stepsData[step].header.icon(isActive);

        default:
            return stepsData[step].header.icon;
    }
};
