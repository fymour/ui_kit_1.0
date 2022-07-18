import React, { FC } from 'react';
import './input.css';


type AllProps = Condition & InputProps;


type Condition = {
    disabled?: boolean, 
    success?: boolean,
    errors?: boolean
}

type InputProps = {
    id: string,
    errorStyle:string,
    errorMessage:string,
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
    disabled = true,
    errors = false,
    errorStyle,
    errorMessage = '',
    onChange,
    value,
    size = 'medium',
    ...props
}: AllProps, ) => {
    if (errors) {
       var errorStyle = 'error'
       value='Wrong value'
       errorMessage = 'Error message'
    }else{
        value = ''
    }
    return (
        <>
            <label className='input--label'>
                {label}
            </label>
            <input
                id={id}
                className={[`input--${size}`,`input--${errorStyle}`,    ].join(' ')}
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                value={value}
                placeholder={placeholder}
                {...props} />
                <span
                    className={`input--errormsg`}
                >{errors? errorMessage : ''}</span>
        </>
    )
}

export default Input