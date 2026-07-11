import type { FC } from 'react';
import { Outlet } from 'react-router';
import classNames from 'classnames/bind';

import styles from '@/layouts/MainLayout/MainLayout.module.scss'

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { MainSidebar } from '@/layouts/MainLayout/MainSidebar/MainSidebar';

const cn = classNames.bind(styles);

const MainLayout: FC = () => {
    return (
        <div className={cn('main__container')}>
            <Sidebar>
                <MainSidebar />
            </Sidebar>
            <Outlet />
        </div>
    );
};

export default MainLayout;
