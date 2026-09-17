import { collection, onSnapshot, orderBy, where, query } from 'firebase/firestore';
import { auth, collections, firestore, type Chat } from './service.config';


export const getChatsByUser = (setChatsData: (chats: Record<string, Chat>) => void) => {
    const q = query(
        collection(firestore, collections.chats),
        where('members', 'array-contains', auth.currentUser?.uid),
        orderBy('lastActivity', 'desc')
    );

    return onSnapshot(q, (snapshot) => {
        const chats = snapshot.docs.reduce<Record<string, Chat>>((acc, doc) => {
            acc[doc.id] = doc.data() as Chat;
            return acc;
        }, {});

        console.log(chats)
        
        setChatsData(chats);
    });
};