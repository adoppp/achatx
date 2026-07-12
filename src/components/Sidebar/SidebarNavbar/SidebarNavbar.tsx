import classNames from 'classnames/bind';
import { NavLink } from 'react-router';

import styles from '@/components/Sidebar/SidebarNavbar/SidebarNavbar.module.scss';

import { navbarConfig } from '@/components/Sidebar/SidebarNavbar/SidebarNavbar.config';
import { useState } from 'react';

const cn = classNames.bind(styles);

export const SidebarNavbar = () => {
    const [animated, setAnimated] = useState<string | null>(null);

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
                    <li key={item.title}>
                        <NavLink
                            to={item.href}
                            className={cn('sidebar_navbar--navlink')}
                            onClick={() => handleClick(item.title)}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <item.filledIcon
                                            className={cn(
                                                'sidebar_navbar--icon-fill',
                                                animated === item.title &&
                                                    'sidebar_navbar--icon-bounce',
                                            )}
                                        />
                                    ) : (
                                        <item.outlinedIcon
                                            className={cn(
                                                'sidebar_navbar--icon-stroke',
                                                animated === item.title &&
                                                    'sidebar_navbar--icon-bounce',
                                            )}
                                        />
                                    )}

                                    <p
                                        className={cn(
                                            'sidebar_navbar--navitem_title',
                                            isActive && 'sidebar_navbar--navitem_title--active',
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
