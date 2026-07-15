import classNames from 'classnames/bind';
import type { FC } from 'react';

import styles from './Switch.module.scss';
import type { SwitchProps } from './Switch.types';

const cn = classNames.bind(styles);

export const Switch: FC<SwitchProps> = ({
    id,
    checked,
    onChange,
    disabled = false,
    customClass,
}) => {
    return (
        <label className={cn('switch', customClass?.container)} htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={(event) => onChange(event.target.checked)}
                className={cn('switch__input')}
            />
            <span className={cn('switch__track')}>
                <span className={cn('switch__thumb')} />
            </span>
        </label>
    );
};
