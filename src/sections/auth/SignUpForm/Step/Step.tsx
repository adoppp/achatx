/* eslint-disable react-refresh/only-export-components */
import type { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Loader } from '@/components/Loader/Loader';
import { Personal } from '@/sections/auth/SignUpForm/Step/steps/Personal/Personal';
import { Password } from '@/sections/auth/SignUpForm/Step/steps/Password/Password';
import { Verify } from '@/sections/auth/SignUpForm/Step/steps/Verify/Verify';
import { Header } from '@/sections/auth/SignUpForm/Step/steps/Header/Header';

interface StepProps {
    isLoading: boolean;
    children: ReactNode;
}

const cn = classNames.bind(styles);

export const StepWrapper: FC<StepProps> = ({ isLoading, children }) => {
    return (
        <div className={cn('signup__container')}>
            {isLoading ? (
                <div className={cn('signup__loader')}>
                    <Loader />
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

export const Step = Object.assign(StepWrapper, {
    Personal,
    Password,
    Verify,
    Header,
});
