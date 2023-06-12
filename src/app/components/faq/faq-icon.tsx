import {FC} from 'react';
import {WithClassName} from '@component/app/types/types';

export const FaqIcon: FC<WithClassName> = ({className}) => {
    return (
        <svg className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16.5L7.6215 13.9374C7.23493 11.3202 5.1798 9.26507 2.56259 8.8785L-6.99382e-07 8.5L2.5626 8.1215C5.1798 7.73494 7.23493 5.6798 7.6215 3.0626L8 0.500001L8.3785 3.0626C8.76506 5.6798 10.8202 7.73494 13.4374 8.1215L16 8.5L13.4374 8.8785C10.8202 9.26507 8.76506 11.3202 8.3785 13.9374L8 16.5Z" fill="#E87C34"/>
        </svg>
    );
};
