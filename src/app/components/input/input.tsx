import React, {FC} from 'react';

import s from './input.module.css';
import cn from 'classnames';

type InputProps = {
    value: string;
    onChange(s: string): void;
    placeholderText: string;
    type: string;
    isValidationError?: boolean;
    errorText?: string
}

export const Input: FC<InputProps> = ({value, onChange, placeholderText, type, isValidationError, errorText}) => {
    return (
        <div className={s.inputField}>
            <input
                className={cn(s.input, {[s.nonEmpty]: value.length > 0, [s.withError]: isValidationError})}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <span className={s.placeholder}>{placeholderText}</span>
            <p className={cn(s.errorHint, {[s.visible]: isValidationError})}>{errorText}</p>
        </div>
    )
}
