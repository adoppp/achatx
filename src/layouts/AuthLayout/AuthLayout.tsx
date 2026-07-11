import type { FC } from 'react';
import { Outlet, useMatches } from 'react-router';
import classNames from 'classnames/bind';

import styles from '@/layouts/AuthLayout/AuthLayout.module.scss';

const cn = classNames.bind(styles);

export const AuthLayout: FC = () => {
    const matches = useMatches();
    const title = (matches.at(-1)?.handle as { title?: string }).title ?? 'Unexpected route';

    return (
        <div className={cn('auth')}>
            <header className={cn('auth__header')}>
                <div className={cn('auth__header--container')}>
                    <h1 className={cn('auth__header--title')}>{title}</h1>
                </div>
            </header>
            <section className={cn('auth__section-container')}>
                <Outlet />
            </section>
            <div className={cn('auth__section-bg')}></div>
        </div>
    );
};
