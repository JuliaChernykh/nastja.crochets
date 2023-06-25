import React, {FC} from 'react';
import cn from 'classnames';

import {WithClassName} from '@component/app/types/types';
import {CheckmarkIcon} from '@component/app/components/checkbox/checkmark-icon';

import s from './checkbox.module.css';

type CheckboxProps = WithClassName & {
    isChecked: boolean;
    onChange(): void;
}

export const Checkbox: FC<CheckboxProps> = ({isChecked, onChange, className}) => {
    return (
        <label className={cn(s.checkboxContainer, className)}>
            <input
                className={s.checkbox}
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            {isChecked && <CheckmarkIcon className={s.checkmarkIcon} />}
            {/*<span className={s.checkmark}></span>*/}
        </label>
    );
};
