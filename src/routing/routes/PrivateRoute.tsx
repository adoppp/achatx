import { useAppSelector } from '@/redux/redux.hooks';
import { Navigate, Outlet } from 'react-router';
import { useNavigatePaths } from '../navigationHelpers.config';
import { Loader } from '@/components/Loader/Loader';

export const PrivateRoute = () => {
    const user = useAppSelector((state) => state.auth);

    if (user.status === 'loading') {
        return <Loader />;
    }

    return user.user && user.status === 'authenticated' ? (
        <Outlet />
    ) : (
        <Navigate to={useNavigatePaths.auth.signIn()} replace />
    );
};
