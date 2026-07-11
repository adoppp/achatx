import type { FC } from "react";
import classNames from "classnames/bind";

import styles from '@/layouts/MainLayout/MainSidebar/ChatCard/ChatCard.module.scss';
import Avatar from "react-avatar";

const cn = classNames.bind(styles);

export const ChatCard: FC<any> = ({
    name,
    lastMessage,
    timeStamp,
    online
}) => {
    return (
        <li className={cn('card')}>
            <div className={cn('card__right')}>
                <div className={cn('card__relative')}>
                    <Avatar name={name} size="48px" round />
                    <span className={cn('card__online', online && 'card__hidden')}></span>
                </div>
                <div className={cn('card__main')}>
                    <span className={cn('card__name')}>
                        {name}
                    </span>
                    <span className={cn('card__message')}>
                        {lastMessage}
                    </span>
                </div>
            </div>
            <span className={cn('card__time')}>
                {timeStamp}
            </span>
        </li>
    );
};