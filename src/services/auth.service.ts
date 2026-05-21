import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    type User,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { auth, firestore } from '@/firebase';
import type { SerializedUser } from '@/types/global.types';

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

export const subscribeAuth = (cb: (user: SerializedUser | null) => void) => {
    return onAuthStateChanged(auth, (firebaseUser) => {
        if (!firebaseUser) {
            cb(null);
            return;
        }

        cb({
            id: firebaseUser.uid,
            username: firebaseUser.displayName ?? '',
            lastSeen: Date.now(),
            email: firebaseUser.email,
            phone: firebaseUser.phoneNumber,
        });
    });
};

export const signUpAuth = async ({
    username,
    email,
    password,
}: {
    username: string;
    email: string;
    password: string;
}) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredentials.user, { displayName: username });

    const userRef = doc(firestore, 'users', userCredentials.user.uid);

    await setDoc(userRef, {
        uid: userCredentials.user.uid,
        displayName: username,
        email: userCredentials.user.email,
        photoURL: userCredentials.user.photoURL,
        bio: null,
        createdAt: serverTimestamp(),
    });

    return userCredentials.user;
};

export const verifyByEmail = async (user: User) => {
    await sendEmailVerification(user, {
        url: `${FRONTEND_URL}/auth/signin`,
    });
};
