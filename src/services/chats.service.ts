import {
    collection,
    onSnapshot,
    orderBy,
    where,
    query,
    setDoc,
    doc,
    Timestamp,
} from 'firebase/firestore';
import { auth, collections, firestore, type Chat } from './service.config';
import type { CreateChat } from '@/services/chats.service.types';

export const subscribeToUserChats = (
    userId: string,
    onSuccess: (chats: Record<string, Chat>) => void,
    onError: (error: Error) => void,
) => {
    const q = query(
        collection(firestore, collections.chats),
        where('members', 'array-contains', userId),
        orderBy('lastActivity', 'desc'),
    );

    return onSnapshot(
        q,
        (snapshot) => {
            const chats = snapshot.docs.reduce<Record<string, Chat>>((acc, doc) => {
                acc[doc.id] = doc.data() as Chat;
                return acc;
            }, {});

            onSuccess(chats);
        },
        (error) => {
            onError(error);
        },
    );
};

export const listenChatsByUser = () => {};

export const createChat = async ({ creatorId, memberId, membersId, type }: CreateChat) => {
    let chatId: string;
    let members: string[];

    if (type === 'private') {
        members = [creatorId, memberId];

        chatId = [...members].sort().join('_');
    } else {
        members = [creatorId, ...membersId];

        chatId = doc(collection(firestore, collections.chats)).id;
    }

    const chatsRef = doc(firestore, collections.chats, chatId);

    await setDoc(chatsRef, {
        id: chatId,
        members,

        lastMessage: null,
        lastActivity: Timestamp.now(),

        type: type,

        createdAt: Timestamp.now(),
    });

    return chatId;
};
