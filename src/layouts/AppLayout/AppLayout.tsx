import { useErrorHandler } from '@/hooks/useErrorHandler';
import { useEffect, type FC } from 'react';
import { Outlet } from 'react-router';

export const AppLayout: FC = () => {
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
