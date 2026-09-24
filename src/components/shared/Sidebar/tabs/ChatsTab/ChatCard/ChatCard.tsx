import classNames from 'classnames/bind';
import type { FC } from 'react';

import styles from '@/components/shared/Sidebar/tabs/ChatsTab/ChatCard/ChatCard.module.scss';
import { useNavigatePaths } from '@/routing/navigationHelpers.config';
import Avatar from 'react-avatar';
import { NavLink } from 'react-router';

const cn = classNames.bind(styles);

interface ChatCardProps {
    id: string;
    name: string;
    lastMessage: string;
    timeStamp: string;
    online?: boolean;
}

export const ChatCard: FC<ChatCardProps> = ({
    id,
    name,
    lastMessage,
    timeStamp,
    online = false,
}) => {
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
                        <span className={cn(online && 'card__online')} />
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
