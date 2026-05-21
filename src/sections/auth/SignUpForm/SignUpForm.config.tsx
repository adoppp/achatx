import { IconAnimatedEmail, IconLockAnimated, IconUser } from '@/assets/svg';
import { Step } from '@/sections/auth/SignUpForm/Step/Step';

// Component (body of the step), icon, progressTitle and progressDescription for progressbar, title of step, description of step
export const stepsData = {
    1: {
        component: Step.Personal,
        progress: {
            progressTitle: 'Personal info',
        },
        header: {
            icon: <IconUser />,
            title: 'Type your name and email',
            description: 'All users can see your name and email',
        },
    },

    2: {
        component: Step.Password,
        progress: {
            progressTitle: 'Password',
        },
        header: {
            icon: (isOpen: boolean) => <IconLockAnimated isOpen={isOpen} />,
            title: 'Create a password',
            description: 'Choose a strong password to secure your account',
        },
    },

    3: {
        component: Step.Verify,
        progress: {
            progressTitle: 'Verify',
        },
        header: {
            icon: <IconAnimatedEmail />,
            title: 'Verify your email',
            description: 'We have send verification link to your email',
        },
    },
} as const;

// step number
export type Step = keyof typeof stepsData;
// to find max step
export const STEPS = Object.keys(stepsData).map(Number) as Step[];
