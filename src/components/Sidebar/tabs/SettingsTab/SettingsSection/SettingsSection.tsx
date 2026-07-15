import classNames from 'classnames/bind';
import type { FC } from 'react';
import type { SettingsItem } from '../SettingsTab.config';

import styles from '@/components/Sidebar/tabs/SettingsTab/SettingsTab.module.scss';
import { NavLink } from 'react-router';
import { IconArrowRight } from '@/assets/svg';

interface SettingsSectionProps {
    title: string;
    items: SettingsItem[];
}

const cn = classNames.bind(styles);

export const SettingsSection: FC<SettingsSectionProps> = ({ title, items }) => {
    return (
        <section className={cn('settings__tab--section')}>
            <p className={cn('settings__tab--section-title')}>{title}</p>

            <div className={cn('settings__tab--card')}>
                {items.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.href}
                        end
                        className={({ isActive }) =>
                            cn('settings__tab--item', {
                                'settings__tab--item--active': isActive,
                            })
                        }
                        viewTransition
                    >
                        {({ isActive }) => {
                            const Icon = isActive ? item.filledIcon : item.outlinedIcon;

                            return (
                                <>
                                    <div className={cn('settings__tab--item-left')}>
                                        <Icon
                                            className={cn(
                                                'settings__tab--icon',
                                                isActive
                                                    ? 'settings__tab--icon-fill'
                                                    : 'settings__tab--icon-stroke',
                                            )}
                                        />

                                        <span className={cn('settings__tab--title')}>
                                            {item.title}
                                        </span>
                                    </div>

                                    <div className={cn('settings__tab--item-right')}>
                                        {item.subtitle && (
                                            <span className={cn('settings__tab--subtitle')}>
                                                {item.subtitle}
                                            </span>
                                        )}

                                        <span className={cn('settings__tab--chevron')}>
                                            <IconArrowRight
                                                className={cn(
                                                    'settings__tab--icon',
                                                    'settings__tab--icon-arrow',
                                                    isActive && 'settings__tab--icon-arrow-active',
                                                )}
                                                stroke="currentColor"
                                                width="16"
                                                height="16"
                                            />
                                        </span>
                                    </div>
                                </>
                            );
                        }}
                    </NavLink>
                ))}
            </div>
        </section>
    );
};
