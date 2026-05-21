import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { IconCheckMark } from '@/assets/svg';
import { stepsData, type Step } from '@/sections/auth/SignUpForm/SignUpForm.config';

interface ProgressProps {
    step: Step;
}

const cn = classNames.bind(styles);

export const Progress: FC<ProgressProps> = ({ step }) => {
    const items = Object.entries(stepsData).map(([id, data]) => {
        const numericId = Number(id) as Step;

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
                <span className={cn('signup__progress--box')}>
                    <span className={cn('signup__progress--number')}>{id}</span>
                    <IconCheckMark />
                </span>

                <span className={cn('signup__progress--title')}>{data.progress.progressTitle}</span>
            </li>
        );
    });

    return (
        <div className={cn('signup__progress')}>
            <ul className={cn('signup__progress--list')}>{items}</ul>
        </div>
    );
};
