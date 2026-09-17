import { auth, firestore } from '@/firebase';
import type { SerializedUser, Chat } from '@/types/global.types';

const collections = {
    users: 'users',
    chats: 'chats'
} as const;

export {
    auth,
    firestore,
    collections,
    type SerializedUser,
    type Chat
}