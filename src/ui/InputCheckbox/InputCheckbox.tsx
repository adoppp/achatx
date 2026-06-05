import { useId, type FC } from "react";
import classNames from "classnames/bind";

import styles from '@/ui/InputCheckbox/InputCheckbox.module.scss';

interface InputCheckboxProps {
    label: string,
    isChecked: boolean,
    checkMarkPosition?: 'left' | 'right',
    onChange: () => void  
}

const cn = classNames.bind(styles);

export const InputCheckbox: FC<InputCheckboxProps> = ({ label, isChecked, onChange, checkMarkPosition = 'left' }) => {
    const id = useId();

    return (
        <label htmlFor={id} className={cn('checkbox__container')}>
            <span className={cn('checkbox__label', checkMarkPosition === 'left' && 'checkbox__label-left')}>
                {label}
            </span>
            <input id={id} type="checkbox" onChange={onChange} checked={isChecked} />
            <span className={cn('checkbox__checkmark', checkMarkPosition === 'right' && 'checkbox__checkmark-right')}></span>
        </label>
    );
};