import classNames from 'classnames/bind';
import type { FC } from 'react';
import {
    IoChatbubbles,
    IoChatbubblesOutline,
    IoSettings,
    IoSettingsOutline,
} from 'react-icons/io5';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import styles from '@/layouts/MainLayout/MainSidebar/MainSidebar.module.scss';
import { useNavigatePaths } from '@/routing/navigationHelpers.config';
import { NavLink } from 'react-router';
import { ChatCard } from './ChatCard/ChatCard';

const cn = classNames.bind(styles);

const testDataChats = [
    {
        id: 1,
        name: 'Anna',
        lastMessage: 'asap',
        timeStamp: '06:03 PM',
        online: true,
    },
    {
        id: 2,
        name: 'Anna',
        lastMessage: 'asap djdj d fkdjgjbdvf ff f if f fdf i',
        timeStamp: '01:03 PM',
        online: false,
    },
    {
        id: 3,
        name: 'Jordan',
        lastMessage: 'asap',
        timeStamp: '12:03 PM',
        online: true,
    },
    {
        id: 4,
        name: 'Anna',
        lastMessage: 'afsdf fdsf ds ! ds ds d???? >?d sdsap',
        timeStamp: '12:03 PM',
        online: false,
    },
    {
        id: 5,
        name: 'Aser',
        lastMessage: 'asap',
        timeStamp: '12:03 PM',
        online: true,
    },
];

const navbarConfig = [
    {
        title: 'Chats',
        outlinedIcon: <IoChatbubblesOutline className={cn('main_siderbar__footer--icon-stroke')} />,
        filledIcon: <IoChatbubbles className={cn('main_siderbar__footer--icon-fill')} />,
        href: useNavigatePaths.app.chats(),
    },
    {
        title: 'Settings',
        outlinedIcon: <IoSettingsOutline className={cn('main_siderbar__footer--icon-stroke')} />,
        filledIcon: <IoSettings className={cn('main_siderbar__footer--icon-fill')} />,
        href: useNavigatePaths.settings.index(),
    },
];

export const MainSidebar: FC = () => {
    const items = testDataChats.map((item) => <ChatCard key={item.id} {...item} />);

    const navItems = navbarConfig.map((item) => {
        return (
            <li key={item.title}>
                <NavLink to={item.href} className={cn('main_siderbar__footer--navlink')}>
                    {({ isActive }) => {
                        return (
                            <>
                                {isActive ? item.filledIcon : item.outlinedIcon}
                                <p
                                    className={cn(
                                        'main_siderbar__footer--navitem_title',
                                        isActive && 'main_siderbar__footer--navitem_title--active',
                                    )}
                                >
                                    {item.title}
                                </p>
                            </>
                        );
                    }}
                </NavLink>
            </li>
        );
    });
    return (
        <Sidebar>
            <header className={cn('main_siderbar__header')}></header>
            <div className={cn('main_siderbar__content')}>
                <ul>{items}</ul>
            </div>
            <footer className={cn('main_siderbar__footer')}>
                <ul className={cn('main_siderbar__footer--list')}>{navItems}</ul>
            </footer>
        </Sidebar>
    );
};
