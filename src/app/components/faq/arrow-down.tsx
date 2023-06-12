import {FC} from 'react';
import {WithClassName} from '@component/app/types/types';

export const ArrowDown: FC<WithClassName> = ({className}) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#58453B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};
