import { useModalContext } from "@/components/Modal/ModalProvider";
import { auth } from "@/firebase";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { useEffect, useState, type FC, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "react-router";
import styles from '@/sections/auth/Action/Action.module.scss';
import classNames from 'classnames/bind';
import { InputPassword } from "@/ui/InputPassword/InputPassword";
import type { IsPasswordValid } from "../../auth.types";
import { Button } from "@/ui/Button/Button";
import { PasswordValidationItem } from "../../PasswordValidationItem";
import { useAuthErrorHelper } from '@/sections/auth/authError.helper';

const cn = classNames.bind(styles);

interface FormState {
    password: string,
    passwordConfirm: string
}

type Field = keyof FormState;

interface ErrorState {
    password: IsPasswordValid,
    passwordConfirm: string | null
}

const initialFormState: FormState = {
    password: '',
    passwordConfirm: ''
};

const initialIsPasswordValid: IsPasswordValid = {
    isEnoughCharacters: false,
    isOneUppercase: false,
    isOneLowercase: false,
    isOneNumber: false,
    isOneSpecialSymbol: false,
};

const initialErrorState: ErrorState = {
    password: initialIsPasswordValid,
    passwordConfirm: null
};

export const ResetPasswordAction: FC = () => {
    const [isloading, setIsLoading] = useState(true);
    const [email, setEmail] = useState<string>('')
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorState);
    const { openModal, closeModal } = useModalContext();
    const handleError = useAuthErrorHelper({ openModal, closeModal });
    const [searchParams] = useSearchParams();
    const code = searchParams.get('oobCode');
    const isPasswordValid = Object.values(errorState.password).every(Boolean);

    const handleChange = (field: Field) => (value: string) => {
        setFormState(prev => {
            const newState = { ...prev, [field]: value };

            queueMicrotask(() => {
                validate(field, newState);
            });

            return newState;
        })
    };

    const validate = (field: Field, state: FormState) => {
        const error = validateField(field, state);

        setErrorState(prev => ({ ...prev, [field]: error }));

    }

    const validateField = (field: Field, state: FormState) => {
        const value = state[field].trim();
    
        if (value.length === 0 && field !== 'password') {
            return 'Field can not be empty';
        }

        switch (field) {
            case 'password':
                    return {
                        isEnoughCharacters: value.length >= 12,
                        isOneUppercase: /[A-Z]/.test(value),
                        isOneLowercase: /[a-z]/.test(value),
                        isOneNumber: /[0-9]/.test(value),
                        isOneSpecialSymbol: /[^A-Za-z0-9]/.test(value),
                    };
    
            case 'passwordConfirm':
                if (value !== state.password.trim()) return 'The password does not match';
                return null;

            default:
                return null
        };
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            await confirmPasswordReset(auth, code!, formState.password);
        } catch (error) {
            
        }
    }
    
    const items: ReactNode = Object.entries(errorState.password).map(([key, isValid]) => {
        const typedKey = key as keyof IsPasswordValid;

        return <PasswordValidationItem key={key} typedKey={typedKey} isValid={isValid} />;
    });

    useEffect(() => {
        const verifyCode = async () => {
            closeModal();

            if (code) {
                try {
                    setIsLoading(true);
                    const email = await verifyPasswordResetCode(auth, code);

                    setEmail(email);


                } catch (error: unknown) {
                    handleError(error)
                } finally {
                    setIsLoading(false);
                }
            } 
        };

        verifyCode();
    }, [code]);

    return (
        <div className={cn('action__content')}>
            <p className={cn('action__title')}>
                Reset password for: {email}
            </p>
            <form>
                <InputPassword 
                    label="New password"
                    value={formState.password}
                    onChange={handleChange('password')}
                    error={isPasswordValid ? null : 'Invalid password'}
                />
                <InputPassword 
                    label="Confirm password"
                    value={formState.passwordConfirm}
                    onChange={handleChange('passwordConfirm')}
                    error={errorState.passwordConfirm}
                />
                {items}
                <Button>
                    Submit
                </Button>
            </form>
        </div>
    )
}