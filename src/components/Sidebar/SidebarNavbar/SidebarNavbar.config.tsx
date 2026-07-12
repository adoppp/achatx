import {
    IoChatbubbles,
    IoChatbubblesOutline,
    IoSettings,
    IoSettingsOutline,
} from 'react-icons/io5';

import { useNavigatePaths } from '@/routing/navigationHelpers.config';

export const navbarConfig = [
    {
        title: 'Chats',
        outlinedIcon: IoChatbubblesOutline,
        filledIcon: IoChatbubbles,
        href: useNavigatePaths.app.chats(),
    },
    {
        title: 'Settings',
        outlinedIcon: IoSettingsOutline,
        filledIcon: IoSettings,
        href: useNavigatePaths.app.profile(),
    },
];
