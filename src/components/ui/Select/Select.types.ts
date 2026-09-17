import type { ReactNode } from 'react';

export type SelectOption = {
    value: string;
    label: string;
    icon?: ReactNode;
};

export interface SelectProps {
    id?: string;
    label?: string;
    value: string;
    options: readonly SelectOption[];
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 's' | 'm' | 'l';
    variant?: 'default' | 'glass';
    customClass?: {
        container?: string;
        label?: string;
        select?: string;
        wrapper?: string;
    };
}
