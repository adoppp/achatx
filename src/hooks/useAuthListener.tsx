import { useEffect, useState } from 'react';

import { auth } from '@/firebase';
import { setGuest, setLoading, setUser } from '@/redux/reducers/authSlice';
import { resetError } from '@/redux/reducers/errorSlice';
import { useAppDispatch } from '@/redux/redux.hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { errorHelper } from './errorHelper';

export const useAuthState = () => {
    const [hookUser, setHookUser] = useState(null);
    const [hookLoading, setHookLoading] = useState(true);
    const [hookError, setHookError] = useState(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading());

        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                if (currentUser) {
                    dispatch(
                        setUser({
                            id: currentUser.uid,
                            username: currentUser.displayName ?? '',
                            lastSeen: Date.now(),
                            email: currentUser.email,
                            phone: currentUser.phoneNumber,
                        }),
                    );
                    dispatch(resetError());
                }
            },
            (err: unknown) => {
                errorHelper(dispatch, err, 'Authentication Error');
                dispatch(setGuest());
                setHookLoading(false);
            },
        );

        return () => unsubscribe();
    }, [dispatch, auth]);
};
