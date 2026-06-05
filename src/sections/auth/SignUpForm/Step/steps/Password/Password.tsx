import { type FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { Button } from '@/ui/Button/Button';
import { InputPassword } from '@/ui/InputPassword/InputPassword';
import { usePassword } from '@/sections/auth/SignUpForm/Step/steps/Password/Password.hooks';

const cn = classNames.bind(styles);

export const Password: FC = () => {
    const { 
        step, 
        maxStep, 
        formState, 
        errorState, 
        formId, 
        isPasswordValid, 
        items, 
        _prev, 
        canGoNext, 
        handleOnChange, 
        handleSubmit 
    } = usePassword();

    return (
        <>
            <div className={cn('signup__content')}>
                <form className={cn('signup__form')} id={formId} onSubmit={handleSubmit}>
                    <InputPassword
                        label="Password"
                        value={formState.password}
                        onChange={handleOnChange('password')}
                        error={isPasswordValid ? null : 'Invalid password'}
                    />
                    <InputPassword
                        label="Confirm your password"
                        value={formState.confirmPassword}
                        onChange={handleOnChange('confirmPassword')}
                        error={errorState.confirmPassword}
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

