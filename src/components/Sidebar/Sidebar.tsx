import classNames from 'classnames/bind';
import { useState, type FC } from 'react';

import styles from '@/components/Sidebar/Sidebar.module.scss';

import { tabs } from './Sidebar.config';
import type { SidebarTab } from './Sidebar.types';
import { SidebarNavbar } from './SidebarNavbar/SidebarNavbar';

const cn = classNames.bind(styles);

const SidebarRoot: FC = () => {
    const [activeTab, setActiveTab] = useState<SidebarTab>('chats');
    const Tab: FC = tabs[activeTab];

    return (
        <aside className={cn('sidebar')}>
            <div className={cn('sidebar__container')}>
                <Tab />
                <SidebarNavbar handleSetNewTab={(value: SidebarTab) => setActiveTab(value)} />
            </div>
        </aside>
    );
};

export const Sidebar = Object.assign(SidebarRoot, {
    SidebarNavbar,
});
