import React, {FC} from 'react';
import s from './title.module.css';
import {WithClassName} from '../../types/types';
import cn from 'classnames';

type Props = WithClassName & {
  children: any;
}

export const Title: FC<Props> = ({children, className}) => {
  return <h1 className={cn(s.title, className)}>{children}</h1>;
};
