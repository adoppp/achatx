import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { stepsData } from '@/sections/auth/SignUpForm/SignUpForm.config';
import { StepIconHandler } from '@/sections/auth/SignUpForm/Step/StepIconHandler';
import { useSignUpFormContext } from '@/sections/auth/SignUpForm/SignUpFormProvider';

const cn = classNames.bind(styles);

export const Header: FC = () => {
    const { step, isPasswordValid } = useSignUpFormContext();

    return (
        <>
            {
                stepsData[step].header && (
                <div className={cn('signup__description')}>
                    <div className={cn('signup__description--icon', `signup__description--icon-${step}`)}>
                        <StepIconHandler step={step} isActive={isPasswordValid} />    
                    </div>
                    <h2 className={cn('signup__description--title')}>{stepsData[step].header.title}</h2>
                    <p className={cn('signup__description--description')}>
                        {stepsData[step].header.description}
                    </p>
                </div>)
            }
        </>
    );
};
