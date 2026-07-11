import { useEffect, type FC } from 'react';
import { Outlet } from 'react-router';

export const AppLayout: FC = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
};
