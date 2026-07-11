import { type FC, type ReactNode } from "react";
import classNames from "classnames/bind";

import styles from '@/components/Sidebar/Sidebar.module.scss';

interface SidebarProps {
    children: ReactNode,
};

const cn = classNames.bind(styles);

export const Sidebar: FC<SidebarProps> = ({ children }) => {
    return (
        <aside className={cn('sidebar')}>
            <div className={cn('sidebar__container')}>
                {children}
            </div>
        </aside>
    );
};