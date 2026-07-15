import classNames from 'classnames/bind';
import type { FC } from 'react';

import { Input } from '@/ui/Input/Input';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import styles from '@/components/Sidebar/tabs/SettingsTab/SettingsTab.module.scss';

import { SettingsSection } from './SettingsSection/SettingsSection';
import { SettingsConfig, type SettingsConfigProps } from './SettingsTab.config';

const cn = classNames.bind(styles);

export const SettingsTab: FC = () => {
    const [search, setSearch] = useState('');

    const renderSection = (sections: SettingsConfigProps[]) => {
        const query = search.trim().toLowerCase();

        return sections.map((section) => {
            if (!query) {
                return (
                    <SettingsSection
                        key={section.title}
                        title={section.title}
                        items={section.items}
                    />
                );
            }

            const filteredItems = section.items.filter((item) => {
                return (
                    section.title.toLowerCase().includes(query) ||
                    item.title.toLowerCase().includes(query) ||
                    item.subtitle?.toLowerCase().includes(query)
                );
            });

            if (filteredItems.length === 0) {
                return null;
            }

            return (
                <SettingsSection key={section.title} title={section.title} items={filteredItems} />
            );
        });
    };

    return (
        <div className={cn('settings__tab')}>
            <div className={cn('settings__tab--search-container')}>
                <Input
                    value={search}
                    onChange={setSearch}
                    placeholder="Search settings"
                    variant="glass"
                    rightIcon={<IoSearchOutline className={cn('settings__tab--search-icon')} />}
                    customClass={{
                        container: cn('settings__tab--search-input'),
                    }}
                />
            </div>

            <div className={cn('settings__tab--content')}>{renderSection(SettingsConfig)}</div>
        </div>
    );
};
