import type { FC } from 'react';

import { stepsData } from '@/sections/auth/SignUpForm/SignUpForm.config';
import type { StepType } from "@/sections/auth/SignUpForm/SignUpForm.types";

interface StepIconHandlerProps {
    step: StepType;
    isActive?: boolean;
};

// handels icons with props
export const StepIconHandler: FC<StepIconHandlerProps> = ({ step, isActive = false }) => {
    const Icon = stepsData[step].header?.icon;

    if (!Icon) {
        return null;
    }

    if (step === 2) {
        return (
            <Icon
                isClosed={isActive}
            />
        );
    }

    return <Icon />;
}
