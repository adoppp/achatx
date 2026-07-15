import classNames from 'classnames/bind';
import type { FC } from 'react';

import type { AccentPalette } from '@/hooks/useTheme';
import { Select } from '@/ui/Select/Select';
import styles from './ThemeAccentSection.module.scss';

const cn = classNames.bind(styles);

const ACCENT_MAP = {
    blue: '#3390ec',
    lavender: '#8b5cf6',
    red: '#ef4444',
    purple: '#7c3aed',
    green: '#22c55e',
} as const;

const ACCENTS = Object.keys(ACCENT_MAP) as Array<keyof typeof ACCENT_MAP>;

const ACCENT_OPTIONS = ACCENTS.map((color) => ({
    value: color,
    label: color.charAt(0).toUpperCase() + color.slice(1),
    icon: <span className={cn('accent-dot')} style={{ backgroundColor: ACCENT_MAP[color] }} />,
}));

interface ThemeAccentSectionProps {
    accent: AccentPalette;
    onAccentChange: (value: AccentPalette) => void;
}

export const ThemeAccentSection: FC<ThemeAccentSectionProps> = ({ accent, onAccentChange }) => {
    return (
        <section className={cn('section')}>
            <div className={cn('card')}>
                <div className={cn('title')}>Accent</div>
                <Select
                    label="Accent color"
                    value={accent}
                    options={ACCENT_OPTIONS}
                    onChange={(value) => onAccentChange(value as AccentPalette)}
                    placeholder="Choose an accent"
                    customClass={{ container: cn('select') }}
                />
            </div>
        </section>
    );
};
