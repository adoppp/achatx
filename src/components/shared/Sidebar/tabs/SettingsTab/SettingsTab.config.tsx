import type { IconType } from 'react-icons';
import {
    IoColorPalette,
    IoColorPaletteOutline,
    IoGlobe,
    IoGlobeOutline,
    IoHelpCircle,
    IoHelpCircleOutline,
    IoInformationCircle,
    IoInformationCircleOutline,
    IoNotifications,
    IoNotificationsOutline,
    IoPersonCircle,
    IoPersonCircleOutline,
    IoShieldCheckmark,
    IoShieldCheckmarkOutline,
} from 'react-icons/io5';

import { useNavigatePaths } from '@/routing/navigationHelpers.config';
import { STORAGE_THEME_KEY } from '@/hooks/useTheme';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export type SettingsItem = {
    outlinedIcon: IconType;
    filledIcon: IconType;
    title: string;
    href: string;
    subtitle?: string;
};

export type SettingsConfigProps = {
    title: string;
    items: SettingsItem[];
};

const account: SettingsItem[] = [
    {
        outlinedIcon: IoPersonCircleOutline,
        filledIcon: IoPersonCircle,
        title: 'Profile',
        href: useNavigatePaths.app.settings.profile(),
    },
    {
        outlinedIcon: IoShieldCheckmarkOutline,
        filledIcon: IoShieldCheckmark,
        title: 'Privacy',
        href: useNavigatePaths.app.settings.privacy(),
    },
    {
        outlinedIcon: IoNotificationsOutline,
        filledIcon: IoNotifications,
        title: 'Notifications',
        href: useNavigatePaths.app.settings.notifications(),
    },
];

const appearance: SettingsItem[] = [
    {
        outlinedIcon: IoColorPaletteOutline,
        filledIcon: IoColorPalette,
        title: 'Theme',
        subtitle: localStorage.getItem(STORAGE_THEME_KEY)
            ? capitalizeFirstLetter(localStorage.getItem(STORAGE_THEME_KEY)!)
            : 'Light',
        href: useNavigatePaths.app.settings.theme(),
    },
    {
        outlinedIcon: IoGlobeOutline,
        filledIcon: IoGlobe,
        title: 'Language',
        subtitle: 'English',
        href: useNavigatePaths.app.settings.language(),
    },
];

const about: SettingsItem[] = [
    {
        outlinedIcon: IoHelpCircleOutline,
        filledIcon: IoHelpCircle,
        title: 'Help',
        href: useNavigatePaths.app.settings.help(),
    },
    {
        outlinedIcon: IoInformationCircleOutline,
        filledIcon: IoInformationCircle,
        title: 'About',
        href: useNavigatePaths.app.settings.about(),
    },
];

export const SettingsConfig: SettingsConfigProps[] = [
    {
        title: 'Account',
        items: account,
    },
    {
        title: 'Appearance',
        items: appearance,
    },
    {
        title: 'About',
        items: about,
    },
];
