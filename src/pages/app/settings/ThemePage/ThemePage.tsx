import classNames from 'classnames/bind';
import type { FC } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { ThemeAccentSection } from '@/sections/app/settings/Theme/ThemeAccentSection/ThemeAccentSection';
import { ThemeAppearanceSection } from '@/sections/app/settings/Theme/ThemeAppearanceSection/ThemeAppearanceSection';
import styles from './ThemePage.module.scss';

const cn = classNames.bind(styles);

const ThemePage: FC = () => {
    const { theme, accent, surface, setTheme, setAccent, setSurface } = useTheme();

    return (
        <>
            <section className={cn('theme-page__header')}>
                <div>
                    <h1 className={cn('theme-page__title')}>Theme settings</h1>
                    <p className={cn('theme-page__description')}>
                        Choose app appearance, accent, and background style. Your selection is saved
                        locally.
                    </p>
                </div>
            </section>

            <section className={cn('theme-page__section')}>
                <ThemeAppearanceSection
                    theme={theme}
                    surface={surface}
                    onThemeChange={setTheme}
                    onSurfaceChange={setSurface}
                />
                <ThemeAccentSection accent={accent} onAccentChange={setAccent} />
            </section>
        </>
    );
};

export default ThemePage;
