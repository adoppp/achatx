import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Progress } from '@/sections/auth/SignUpForm/Progress/Progress';
import { Step } from '@/sections/auth/SignUpForm/Step/Step';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';

const cn = classNames.bind(styles);

export const SignUpForm: FC = () => {
    const {
        ActiveStepComponent,
    } = useSignUpFormContext();

    return (
        <div className={cn('signup')}>
                <Progress />

                <Step>
                    <Step.Header />
                    <ActiveStepComponent />
                </Step>
        </div>
    );
};
