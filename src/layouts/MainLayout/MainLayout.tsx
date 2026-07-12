import classNames from 'classnames/bind';
import type { FC } from 'react';
import { Outlet } from 'react-router';

import styles from '@/layouts/MainLayout/MainLayout.module.scss';

import { MainSidebar } from '@/layouts/MainLayout/MainSidebar/MainSidebar';

const cn = classNames.bind(styles);

const MainLayout: FC = () => {
    return (
        <div className={cn('main__container')}>
            <MainSidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
