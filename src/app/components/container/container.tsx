import {FC} from 'react';
import s from './container.module.css';
import {WithClassName} from '../../types/types';
import cn from 'classnames';

type Props = WithClassName & {
    children: any;
    wrapperClassName?: string;
}

export const Container: FC<Props> = ({children, className, wrapperClassName}) => {
    return (
        <div className={cn(s.containerWrapper, wrapperClassName)}>
            <div className={cn(s.container, className)}>{children}</div>
        </div>
    );
}
