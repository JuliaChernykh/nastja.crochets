import {FC} from 'react';

import {WithClassName} from '@component/app/types/types';

export const CheckmarkIcon: FC<WithClassName> = ({className}) => {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#F8F6E8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
