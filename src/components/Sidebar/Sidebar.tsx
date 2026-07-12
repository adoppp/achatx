import classNames from 'classnames/bind';
import { useState, type FC } from 'react';

import styles from '@/components/Sidebar/Sidebar.module.scss';

import { ChatCard } from '../ChatCard/ChatCard';
import type { SidebarTab } from './Sidebar.types';
import { SidebarNavbar } from './SidebarNavbar/SidebarNavbar';
import { testDataChats } from './temp.data';
import { ChatsTab } from './tabs/ChatsTab/ChatsTab';
import { SettingsTab } from './tabs/SettingsTab/SettingsTab';

const cn = classNames.bind(styles);

const SidebarRoot: FC = () => {
    const [activeTab, setActiveTab] = useState<SidebarTab>('chats');

    const items = testDataChats.map((item) => <ChatCard key={item.id} {...item} />);

    return (
        <aside className={cn('sidebar')}>
            <div className={cn('sidebar__container')}>
                <ul>{items}</ul>
                <SidebarNavbar />
            </div>
        </aside>
    );
};

export const Sidebar = Object.assign(SidebarRoot, {
    SidebarNavbar,
    ChatsTab,
    SettingsTab
});
