import { useId, type FC, type ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { IconCheckMark, IconClose } from '@/assets/svg';
import type { IsPasswordValid } from '@/sections/auth/SignUpForm/SignUpForm.types';
import { Button } from '@/ui/Button/Button';
import { InputPassword } from '@/ui/InputPassword/InputPassword';
import type { StepPasswordProps } from '@/sections/auth/SignUpForm/Step/Step.types';

const passwordErrorMessages: Record<keyof IsPasswordValid, string> = {
    isEightCharacters: 'At least 8 characters',
    isOneUppercase: 'At least one uppercase letter',
    isOneLowercase: 'At least one lowercase letter',
    isOneNumber: 'At least one number',
    isOneSpecialSymbol: 'At least one special symbol',
};

const cn = classNames.bind(styles);

export const Password: FC<StepPasswordProps> = ({
    formState,
    errorState,
    step,
    maxStep,
    _prev,
    canGoNext,
    onChange,
    onSubmit,
}) => {
    const formId = useId();
    const passwdErrors = errorState.password;
    const isPasswordValid = Object.values(passwdErrors).every(Boolean);

    const items: ReactNode = Object.entries(passwdErrors).map(([key, isValid]) => {
        const typedKey = key as keyof IsPasswordValid;
        console.log(key);
        console.log(isValid);

        return (
            <li key={key} className={cn('password__item', isValid && 'password__item--valid')}>
                <span className={cn('password__item--icon')}>
                    {isValid ? <IconCheckMark /> : <IconClose />}
                </span>
                <span className={cn('password__item--rule')}>
                    {passwordErrorMessages[typedKey]}
                </span>
            </li>
        );
    });

    return (
        <>
            <div className={cn('signup__content')}>
                <form className={cn('signup__form')} id={formId} onSubmit={onSubmit}>
                    <InputPassword
                        label="Password"
                        value={formState.password}
                        onChange={onChange('password')}
                        error={isPasswordValid ? null : 'Invalid password'}
                    />
                </form>
                <ul className={cn('password__list')}>{items}</ul>
            </div>

            <div className={cn('signup__button')}>
                <Button variant="secondary" onClick={_prev} disabled={step === 1}>
                    Previous
                </Button>
                <Button form={formId} type="submit" disabled={step === maxStep || !canGoNext()}>
                    Submit
                </Button>
            </div>
        </>
    );
};
