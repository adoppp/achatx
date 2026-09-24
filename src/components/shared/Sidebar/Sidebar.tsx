/* eslint-disable react-refresh/only-export-components */
import classNames from 'classnames/bind';
import { useState, type FC } from 'react';

import styles from '@/components/shared/Sidebar/Sidebar.module.scss';

import { useLocation } from 'react-router';
import { tabs } from '@/components/shared/Sidebar/Sidebar.config';
import type { SidebarTab } from '@/components/shared/Sidebar/Sidebar.types';
import { SidebarNavbar } from '@/components/shared/Sidebar/SidebarNavbar/SidebarNavbar';

const cn = classNames.bind(styles);

const SidebarRoot: FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<SidebarTab>(() => {
        if (location.pathname.startsWith('/settings')) {
            return 'settings';
        } else if (location.pathname.startsWith('/chat')) {
            return 'chats';
        } else {
            return 'chats';
        }
    });
    const Tab: FC = tabs[activeTab];

    return (
        <aside className={cn('sidebar')}>
            <div className={cn('sidebar__container')}>
                <Tab />
                <SidebarNavbar handleSetNewTab={setActiveTab} />
            </div>
        </aside>
    );
};

// Sidebar exposes its navbar as a compound component API.
export const Sidebar = Object.assign(SidebarRoot, {
    SidebarNavbar,
});
