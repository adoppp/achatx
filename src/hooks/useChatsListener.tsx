import { auth } from '@/firebase';
import { setChats, setChatsLoading } from '@/redux/reducers/chatsSlice';
import { setError } from '@/redux/reducers/errorSlice';
import {
    useAppDispatch,
    // useAppSelector
} from '@/redux/redux.hooks';
import { subscribeToUserChats } from '@/services/chats.service';
import { useEffect } from 'react';

export const useChatsListener = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = auth.currentUser;

        if (!user) return;

        dispatch(setChatsLoading('loading'));

        const unsubscribe = subscribeToUserChats(
            user.uid,
            (chats) => {
                dispatch(setChats(chats));
                dispatch(setChatsLoading('success'));
            },
            () => {
                dispatch(setChatsLoading('error'));
                dispatch(
                    setError({
                        title: 'Chats error',
                        message: 'Can not load chats',
                    }),
                );
            },
        );

        return unsubscribe;
    }, [dispatch]);
};
