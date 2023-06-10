import React from 'react';
import s from './button.module.css'
import {WithClassName} from '@component/app/types/types';
import cn from 'classnames';

type Props = WithClassName & {
    onClick: () => void;
    children: any;
}

export const Button: React.FC<Props> = ({children, onClick, className}) => {
    return (
        <button className={cn(s.button, className)} onClick={onClick}>{children}</button>
    );
};
