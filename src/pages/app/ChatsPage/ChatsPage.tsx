import classNames from 'classnames/bind';
import { type FC } from 'react';
import { FaComments } from 'react-icons/fa';

import styles from '@/pages/app/ChatsPage/ChatsPage.module.scss';

const cn = classNames.bind(styles);

const ChatsPage: FC = () => {
    return (
        <div className={cn('chats')}>
            <div className={cn('content')}>
                <div className={cn('iconWrap')} aria-hidden="true">
                    <FaComments className={cn('icon')} />
                </div>
                <h2 className={cn('title')}>Не доверяйте - проверяйте.</h2>
                <p className={cn('text')}>
                    Этот мессенджер создан с одной целью - чтобы ваши данные оставались только
                    вашими. Сквозное шифрование, открытая архитектура безопасности и полный контроль
                    над приватностью.
                </p>
            </div>
        </div>
    );
};

export default ChatsPage;
