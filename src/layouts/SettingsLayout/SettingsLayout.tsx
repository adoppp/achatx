import type { FC } from 'react';
import classNames from 'classnames/bind';

import styles from '@/layouts/SettingsLayout/SettingsLayout.module.scss'
import { Outlet } from 'react-router';

const cn = classNames.bind(styles);

const SettingsLayout: FC = () => {
    return (
        <main className={cn('settings__layout')}>
            <Outlet />
        </main>
    )
};

export default SettingsLayout;