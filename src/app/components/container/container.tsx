import {FC} from 'react';
import s from './container.module.css';
import {WithClassName} from '../../types/types';
import cn from 'classnames';

type Props = WithClassName & {

}

export const Container: FC<Props> = ({children, className}) => {
    return <div className={cn(s.container, className)}>{children}</div>;
}
