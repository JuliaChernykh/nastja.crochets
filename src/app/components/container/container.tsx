import {FC} from 'react';
import s from './container.module.css';
import {WithClassName} from '../../types/types';
import cn from 'classnames';

type Props = WithClassName & {
    children: any;
    wrapperClassName?: string;
    fullPage?: boolean;
}

export const Container: FC<Props> = ({children, className, wrapperClassName, fullPage =  false}) => {
    return (
        <div className={cn(s.containerWrapper, wrapperClassName, {[s.fullPage]: fullPage})}>
            <div className={cn(s.container, className)}>{children}</div>
        </div>
    );
}
