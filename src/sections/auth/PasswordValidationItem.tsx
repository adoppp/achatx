import type { FC } from "react";
import classNames from "classnames/bind";

import styles from '@/sections/auth/SignUpForm/SignUpForm.module.scss';

import { IconCheckMark, IconClose } from "@/assets/svg";
import type { IsPasswordValid } from '@/sections/auth/auth.types';

interface PasswordValidationItemProps {
    isValid: boolean;
    typedKey: keyof IsPasswordValid
};

const cn = classNames.bind(styles);

const passwordErrorMessages: Record<keyof IsPasswordValid, string> = {
    isEnoughCharacters: 'At least 12 characters',
    isOneUppercase: 'At least one uppercase letter',
    isOneLowercase: 'At least one lowercase letter',
    isOneNumber: 'At least one number',
    isOneSpecialSymbol: 'At least one special symbol',
};

export const PasswordValidationItem: FC<PasswordValidationItemProps> = ({ isValid, typedKey }) => {
    return (
        <li className={cn('password__item', isValid && 'password__item--valid')}>
            <span className={cn('password__item--icon')}>
                {isValid ? <IconCheckMark /> : <IconClose />}
            </span>
            <span className={cn('password__item--rule')}>
                {passwordErrorMessages[typedKey]}
            </span>
        </li>
    );
};