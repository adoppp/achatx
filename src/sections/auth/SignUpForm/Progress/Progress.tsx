import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { stepsData } from '@/sections/auth/SignUpForm/SignUpForm.config';
import { type StepType } from '@/sections/auth/SignUpForm/SignUpForm.types';
import { useSignUpFormContext } from '../SignUpFormProvider';

const cn = classNames.bind(styles);

export const Progress: FC = () => {
    const { step } = useSignUpFormContext();
    
    const items = Object.entries(stepsData).map(([ id ]) => {
        const numericId = Number(id) as StepType;

        const isActive = step === numericId;
        const isDone = step > numericId;

        return (
            <li
                key={id}
                className={cn(
                    'signup__progress--item',
                    isActive && 'step__active',
                    isDone && 'step__done',
                )}
            >
            </li>
        );
    });

    return (
        <div className={cn('signup__progress')}>
            <ul className={cn('signup__progress--list')}>{items}</ul>
        </div>
    );
};
