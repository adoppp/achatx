import classNames from 'classnames/bind';
import type { FC } from 'react';
import { Outlet } from 'react-router';

import styles from '@/layouts/MainLayout/MainLayout.module.scss';
import { Sidebar } from '@/components/Sidebar/Sidebar';

const cn = classNames.bind(styles);

const MainLayout: FC = () => {
    return (
        <div className={cn('main__container')}>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
