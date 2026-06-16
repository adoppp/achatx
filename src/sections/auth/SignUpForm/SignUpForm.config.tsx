import type { FC } from 'react';

import { IconAnimatedEmail, IconLockAnimated, IconUser } from '@/assets/svg';
import { Step } from '@/sections/auth/SignUpForm/Step/Step';
import type { StepType } from "@/sections/auth/SignUpForm/SignUpForm.types";

interface StepData {
    component: FC<any>;
    header?: {
        icon?: FC<any>;
        title?: string;
        description?: string;
    }
};

type StepsData = {
    [K in number]: StepData
};

export const stepsData: StepsData = {
    1: {
        component: Step.Personal,
        header: {
            icon: IconUser,
            title: 'Type your name and email',
            description: 'All users can see your name and email',
        },
    },
    2: {
        component: Step.Password,
        header: {
            icon: IconLockAnimated,
            title: 'Create a password',
            description: 'Choose a strong password to secure your account',
        },
    },
    3: {
        component: Step.Verify,
        header: {
            icon: IconAnimatedEmail,
            title: 'Verify your email',
            description: 'We have send verification link to your email',
        },
    }
} as const;

// to find max step
export const STEPS = Object.keys(stepsData).map(Number) as StepType[];
