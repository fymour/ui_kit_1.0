import React, { FC } from 'react';
import './input.css';


type AllProps = Condition & InputProps;


type Condition = {
    disabled?: boolean, 
    success?: boolean,
}

type InputProps = {
    id: string,
    label: string,
    value?: string,
    placeholder: string,
    
    onChange: (str: string) => void,
    size?: 'large' | 'medium' | 'small';
}


export const Input = ({
    id,
    label = '',
    placeholder = '',
    disabled = false,
    onChange,
    value,
    size = 'medium',
    ...props
}: AllProps, ) => {
    
    return (
        <>
            <label className='input--label'>
                {label}
            </label>
            <input
                id={id}
                className={`input--${size}` }
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                value={value}
                placeholder={placeholder}
                {...props} />
        </>
    )
}

export default Input