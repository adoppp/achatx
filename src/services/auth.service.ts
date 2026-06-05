import {
    browserLocalPersistence,
    browserSessionPersistence,
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    setPersistence,
    signInWithEmailAndPassword,
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

export const signInAuth = async (email: string, password: string, rememberMe: boolean = false): Promise<void> => {
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

    await signInWithEmailAndPassword(auth, email, password);
}

export const verifyByEmail = async (user: User): Promise<void> => {
    await sendEmailVerification(user, {
        url: `${FRONTEND_URL}/auth/signin`,
        handleCodeInApp: true
    });
};

export const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email, { url: `${FRONTEND_URL}/auth/action` })
}

export const confirmReset = async (code: string, newPassword: string) => {
    await confirmPasswordReset(auth, code, newPassword);
}
