import {
    IoChatbubbles,
    IoChatbubblesOutline,
    IoSettings,
    IoSettingsOutline,
} from 'react-icons/io5';

import { useNavigatePaths } from '@/routing/navigationHelpers.config';
import type { IconType } from 'react-icons';
import type { SidebarTab } from '../Sidebar.types';

interface NavbarConfigItem {
    title: SidebarTab;
    outlinedIcon: IconType;
    filledIcon: IconType;
    href: string;
    selfAnimation?: boolean;
    match: (pathname: string) => boolean;
}

export const navbarConfig: NavbarConfigItem[] = [
    {
        title: 'chats',
        outlinedIcon: IoChatbubblesOutline,
        filledIcon: IoChatbubbles,
        href: useNavigatePaths.app.chats(),
        match: (pathname: string) => pathname === '/chats' || pathname.startsWith('/chat/'),
    },
    {
        title: 'settings',
        outlinedIcon: IoSettingsOutline,
        filledIcon: IoSettings,
        href: useNavigatePaths.app.settings.profile(),
        selfAnimation: true,
        match: (pathname: string) => pathname.startsWith('/settings'),
    },
];
