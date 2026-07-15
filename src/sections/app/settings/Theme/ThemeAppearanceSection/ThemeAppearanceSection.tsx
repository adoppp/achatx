import classNames from 'classnames/bind';
import type { FC } from 'react';

import type { SurfaceMode, ThemeMode } from '@/hooks/useTheme';
import styles from './ThemeAppearanceSection.module.scss';

const cn = classNames.bind(styles);

const THEME_OPTIONS: Array<{ value: ThemeMode; label: string }> = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
];

const SURFACE_OPTIONS: Array<{ value: SurfaceMode; label: string }> = [
    { value: 'neutral', label: 'Neutral' },
    { value: 'accent', label: 'Accent tinted' },
];

interface ThemeAppearanceSectionProps {
    theme: ThemeMode;
    surface: SurfaceMode;
    onThemeChange: (value: ThemeMode) => void;
    onSurfaceChange: (value: SurfaceMode) => void;
}

export const ThemeAppearanceSection: FC<ThemeAppearanceSectionProps> = ({
    theme,
    surface,
    onThemeChange,
    onSurfaceChange,
}) => {
    return (
        <section className={cn('section')}>
            <div className={cn('card')}>
                <div className={cn('title')}>Appearance</div>

                <div className={cn('field')}>
                    <div className={cn('field-label')}>Theme</div>
                    <div className={cn('segmented')} role="radiogroup" aria-label="Theme selection">
                        {THEME_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                role="radio"
                                aria-checked={theme === option.value}
                                className={cn('segment', {
                                    'segment--active': theme === option.value,
                                })}
                                onClick={() => onThemeChange(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={cn('field')}>
                    <div className={cn('field-label')}>Surface</div>
                    <div
                        className={cn('segmented')}
                        role="radiogroup"
                        aria-label="Surface style selection"
                    >
                        {SURFACE_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                role="radio"
                                aria-checked={surface === option.value}
                                className={cn('segment', {
                                    'segment--active': surface === option.value,
                                })}
                                onClick={() => onSurfaceChange(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <p className={cn('description')}>
                    Light and dark are separate from Background Style. Accent tinted uses the
                    current accent only in dark mode surfaces.
                </p>
            </div>
        </section>
    );
};
