import { firebaseErrorMap } from '@/firebase/error.config';
import { setError } from '@/redux/reducers/errorSlice';
import type { AppDispatch } from '@/redux/store';
import { FirebaseError } from 'firebase/app';

export const errorHelper = (dispatch: AppDispatch, error: unknown, title: string) => {
    if (error instanceof FirebaseError) {
        dispatch(
            setError({
                title: title,
                message: firebaseErrorMap[error.code] ?? firebaseErrorMap.default,
            }),
        );
    } else if (error instanceof Error) {
        dispatch(
            setError({
                title: 'Unecxepted error',
                message: error.message,
            }),
        );
    }
};
