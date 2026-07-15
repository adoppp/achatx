import classNames from 'classnames/bind';
import { type FC, useEffect, useMemo, useRef, useState } from 'react';

import { IconArrowRight } from '@/assets/svg';
import styles from '@/ui/Select/Select.module.scss';
import type { SelectOption, SelectProps } from '@/ui/Select/Select.types';

const cn = classNames.bind(styles);

export const Select: FC<SelectProps> = ({
    id,
    label,
    value,
    options,
    onChange,
    placeholder,
    disabled = false,
    size = 'm',
    variant = 'glass',
    customClass,
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(
        () => options.find((option) => option.value === value),
        [options, value],
    );

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const handleTriggerClick = () => {
        if (!disabled) {
            setOpen((current) => !current);
        }
    };

    const handleOptionSelect = (option: SelectOption) => {
        onChange(option.value);
        setOpen(false);
    };

    return (
        <div
            id={id}
            ref={containerRef}
            className={cn(
                'select',
                `select--${size}`,
                `select--${variant}`,
                customClass?.container,
                { 'select--open': open, 'select--disabled': disabled },
            )}
        >
            {label && <span className={cn('select__label', customClass?.label)}>{label}</span>}

            <button
                type="button"
                className={cn('select__trigger', customClass?.select)}
                onClick={handleTriggerClick}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={cn('select__value')}>
                    {selectedOption?.icon && (
                        <span className={cn('select__option-icon')}>{selectedOption.icon}</span>
                    )}
                    <span className={cn('select__text', { select__placeholder: !selectedOption })}>
                        {selectedOption?.label ?? placeholder ?? 'Select'}
                    </span>
                </span>

                <IconArrowRight
                    className={cn('select__icon', { 'select__icon--open': open })}
                    stroke="currentColor"
                    width="16"
                    height="16"
                />
            </button>

            {open && (
                <ul className={cn('select__list')} role="listbox">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={option.value === value}
                            className={cn('select__option', {
                                'select__option--selected': option.value === value,
                            })}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.icon && (
                                <span className={cn('select__option-icon')}>{option.icon}</span>
                            )}
                            <span className={cn('select__option-text')}>{option.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
