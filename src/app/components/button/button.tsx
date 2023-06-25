import React from 'react';
import s from './button.module.css'
import {WithClassName} from '@component/app/types/types';
import cn from 'classnames';

type Props = WithClassName & {
    onClick: () => void;
    disabled?: boolean;
    children: any;
}

export const Button: React.FC<Props> = ({children, onClick, disabled = false, className}) => {
    return (
        <button className={cn(s.button, className)} onClick={onClick} disabled={disabled}>{children}</button>
    );
};
