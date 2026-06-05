import styles from '@/sections/auth/Action/Action.module.scss';
import classNames from 'classnames/bind';
import type { FC, ReactNode } from 'react';

interface ActionWrapperProps {
    children: ReactNode
}

const cn = classNames.bind(styles);

export const ActionWrapper: FC<ActionWrapperProps> = ({ children }) => {
    return (
        <div className={cn('action')}>
            <div className={cn('action__wrapper')}>{children}</div>
        </div>
    );
};