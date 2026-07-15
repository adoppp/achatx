import classNames from 'classnames/bind';
import type { FC } from 'react';

import styles from '@/components/Sidebar/tabs/ChatsTab/ChatCard/ChatCard.module.scss';
import { useNavigatePaths } from '@/routing/navigationHelpers.config';
import Avatar from 'react-avatar';
import { NavLink } from 'react-router';

const cn = classNames.bind(styles);

export const ChatCard: FC<any> = ({ id, name, lastMessage, timeStamp, online }) => {
    return (
        <li className={cn('card')}>
            <NavLink
                to={useNavigatePaths.app.chat(id)}
                className={({ isActive }) => cn('card__link', isActive && 'card__link--active')}
                viewTransition
            >
                <div className={cn('card__right')}>
                    <div className={cn('card__avatar--relative')}>
                        <Avatar name={name} size="48px" round />
                        <span className={cn(online && 'card__online')}></span>
                    </div>
                    <div className={cn('card__main-content')}>
                        <span className={cn('card__name')}>{name}</span>
                        <span className={cn('card__message')}>{lastMessage}</span>
                    </div>
                </div>
                <span className={cn('card__time')}>{timeStamp}</span>
            </NavLink>
        </li>
    );
};
