import type {
    StepFormProps,
    StepPasswordProps,
    VerifyStepProps,
} from '@/sections/auth/SignUpForm/SignUpForm.types';

import { StepPassword } from '@/sections/auth/SignUpForm/steps/StepPassword/StepPassword';
import { StepPersonal } from '@/sections/auth/SignUpForm/steps/StepPersonal/StepPersonal';
import { StepVerify } from '@/sections/auth/SignUpForm/steps/StepVerify/StepVerify';
import { IconEmail, IconLock, IconUser } from '@/assets/svg';

export const STEPS = [1, 2, 3] as const;
export type Step = (typeof STEPS)[number];

export const stepComponents = {
    1: (props: StepFormProps) => <StepPersonal {...props} />,
    2: (props: StepPasswordProps) => <StepPassword {...props} />,
    3: (props: VerifyStepProps) => <StepVerify {...props} />,
} as const;

export const stepIcons = {
    1: IconUser,
    2: (isOpen: boolean) => <IconLock isOpen={isOpen} />,
    3: IconEmail,
} as const;


export const StepIcon = (step: Step) => {
    switch (step) {
        case 1: 
            return IconUser
        
        case 2: 
            return (isOpen: boolean) => <IconLock isOpen={isOpen} />

        case 3: 
            return IconEmail
    };
};