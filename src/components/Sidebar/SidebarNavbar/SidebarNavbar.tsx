import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router';

import styles from '@/components/Sidebar/SidebarNavbar/SidebarNavbar.module.scss';

import { navbarConfig } from '@/components/Sidebar/SidebarNavbar/SidebarNavbar.config';
import { useState, type FC } from 'react';
import type { SidebarTab } from '../Sidebar.types';

interface SidebarNavbarProps {
    handleSetNewTab: (value: SidebarTab) => void;
}

const cn = classNames.bind(styles);

export const SidebarNavbar: FC<SidebarNavbarProps> = ({ handleSetNewTab }) => {
    const [animated, setAnimated] = useState<string | null>(null);
    const location = useLocation();

    const handleClick = (id: string) => {
        setAnimated(null);

        requestAnimationFrame(() => {
            setAnimated(id);
        });
    };

    return (
        <footer className={cn('sidebar_navbar')}>
            <ul className={cn('sidebar_navbar--list')}>
                {navbarConfig.map((item) => (
                    <li key={item.title} onClick={() => handleSetNewTab(item.title)}>
                        <NavLink
                            to={item.href}
                            className={cn('sidebar_navbar--navlink')}
                            onClick={() => handleClick(item.title)}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ||
                                    (location.pathname.includes('/chat/') &&
                                        item.title === 'chats') ? (
                                        <item.filledIcon
                                            className={cn(
                                                'sidebar_navbar--icon-fill',
                                                animated === item.title &&
                                                    (item.selfAnimation
                                                        ? `sidebar_navbar--icon-${item.title}`
                                                        : 'sidebar_navbar--icon-bounce'),
                                            )}
                                        />
                                    ) : (
                                        <item.outlinedIcon
                                            className={cn(
                                                'sidebar_navbar--icon-stroke',
                                                animated === item.title &&
                                                    (item.selfAnimation
                                                        ? `sidebar_navbar--icon-${item.title}`
                                                        : 'sidebar_navbar--icon-bounce'),
                                            )}
                                        />
                                    )}

                                    <p
                                        className={cn(
                                            'sidebar_navbar--navitem_title',
                                            isActive ||
                                                (location.pathname.includes('/chat/') &&
                                                    item.title === 'chats' &&
                                                    'sidebar_navbar--navitem_title--active'),
                                        )}
                                    >
                                        {item.title}
                                    </p>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </footer>
    );
};
