import { type FC } from 'react';
import { useAuthListener } from '@/hooks/useAuthListener';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { Outlet } from 'react-router';

export const AppLayout: FC = () => {
    useAuthListener();
    useErrorHandler();

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'

    //     return () => {
    //         document.body.style.overflow = ''
    //     }
    // }, []);

    return (
        <>
            <Outlet />
        </>
    );
};
