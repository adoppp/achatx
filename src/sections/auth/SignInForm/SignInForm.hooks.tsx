import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

import { emailRegex } from '@/constants/regex';
import { errorHelper } from '@/hooks/errorHelper';
import { ROUTE_URLS } from '@/routing/path.config';
import type { ErrorState, Field, FormState } from '@/sections/auth/SignInForm/SignInForm.types';
import { signInAuth } from '@/services/auth.service';
import { useAppDispatch } from '@/redux/redux.hooks';

const initialFormState: FormState = {
    email: '',
    password: '',
};

const initialErrorState: ErrorState = {
    email: null,
    password: null,
};

export const useSignInForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [errorState, setErrorState] = useState<ErrorState>(initialErrorState);
    const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleChange = (field: Field) => (value: string) => {
        setFormState((prev) => {
            const newState = { ...prev, [field]: value };

            queueMicrotask(() => {
                validation(field, newState);
            });

            return newState;
        });
    };

    const validation = (field: Field, state: FormState) => {
        const error = validateField(field, state);

        setErrorState((prev) => ({ ...prev, [field]: error }));
    };

    const validateField = (field: Field, state: FormState) => {
        const value = state[field].trim();

        if (value.length === 0) {
            return 'Field can not be empty';
        }

        switch (field) {
            case 'email':
                if (!value.toLowerCase().match(emailRegex)) return 'Invalid email';
                return null;

            case 'password':
                if (value.length < 12) return 'Minimal 12 symbols';
                return null;

            default:
                return null;
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isErrors = !!Object.values(errorState).every((e) => e === null || '');

        if (isErrors) {
            try {
                setIsLoading(true);

                await signInAuth(formState.email, formState.password, isRememberMe);

                navigate(ROUTE_URLS.app.chats());
            } catch (error) {
                errorHelper(dispatch, error, 'Authentication Error');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        email: formState.email,
        password: formState.password,
        errorState,
        isRememberMe,
        isLoading,
        setIsRememberMe,
        handleChange,
        handleSubmit,
    };
};
