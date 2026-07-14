import { ChatCard } from '@/components/Sidebar/tabs/ChatsTab/ChatCard/ChatCard';
import classNames from 'classnames/bind';
import { useState, type FC } from 'react';
import { IoAdd, IoSearchOutline } from 'react-icons/io5';
import { testDataChats } from '../../temp.data';

import styles from '@/components/Sidebar/tabs/ChatsTab/ChatsTab.module.scss';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';

const cn = classNames.bind(styles);

export const ChatsTab: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const items = testDataChats.map((item) => <ChatCard key={item.id} {...item} />);

    return (
        <>
            <div className={cn('chats__tab--search-container')}>
                <Input
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Search"
                    variant="glass"
                    rightIcon={<IoSearchOutline className={cn('chats__tab--search-icon')} />}
                    customClass={{
                        container: cn('chats__tab--search-input'),
                    }}
                />
                <Button variant="tertiary" customClassName={cn('chats__tab--search-button')}>
                    <IoAdd className={cn('chats__tab--search-button_icon')} />
                </Button>
            </div>
            <ul className={cn('chats__tab--list')}>{items}</ul>
        </>
    );
};
