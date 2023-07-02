import React from 'react';
import s from './button.module.css'
import {WithClassName} from '@component/app/types/types';
import cn from 'classnames';

type Props = WithClassName & {
    onClick: () => void;
    disabled?: boolean;
    children: any;
    size?: 's' | 'm';
    type?: 'default' | 'filled';
}

export const Button: React.FC<Props> = ({
    children,
    onClick,
    disabled = false,
    className,
    size = 'm',
    type = 'default',
}) => {
    return (
        <button className={cn(s.button, className, s[size], s[type])} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
