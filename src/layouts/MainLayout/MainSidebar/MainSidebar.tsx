import type { FC } from "react";
import classNames from "classnames/bind";

import styles from '@/layouts/MainLayout/MainSidebar/MainSidebar.module.scss';
import { IconAdd, IconSettings } from "@/assets/svg";
import { ChatCard } from "./ChatCard/ChatCard";

const cn = classNames.bind(styles);

const testDataChats = [
    {
        id: 1,
        name: 'Anna',
        lastMessage: 'asap',
        timeStamp: '06:03 PM',
        online: true
    },
    {
        id: 2,
        name: 'Anna',
        lastMessage: 'asap djdj d fkdjgjbdvf ff f if f fdf i',
        timeStamp: '01:03 PM',
        online: false
    },
    {
        id: 3,
        name: 'Jordan',
        lastMessage: 'asap',
        timeStamp: '12:03 PM',
        online: true
    },
    {
        id: 4,
        name: 'Anna',
        lastMessage: 'afsdf fdsf ds ! ds ds d???? >?d sdsap',
        timeStamp: '12:03 PM',
        online: false
    },
    {
        id: 5,
        name: 'Aser',
        lastMessage: 'asap',
        timeStamp: '12:03 PM',
        online: true
    }
]

export const MainSidebar: FC = () => {
    const items = testDataChats.map(item => (<ChatCard key={item.id} {...item} />))
    return (
        <>
            <header className={cn('main_siderbar__header')}>
                <IconSettings className={cn('main_siderbar__header--settings')} />
                <h1 className={cn('main_siderbar__header--title')}>
                    Messages
                </h1>
                <IconAdd className={cn('main_siderbar__header--add')} />
            </header>
            <div className={cn('main_siderbar__content')}>
                <ul>
                    {items}
                </ul>
            </div>
        </>
    );
};