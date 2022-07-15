import React, { FC } from 'react';
import { useState } from 'react';
import './input.css';

interface InputProps {
    id: string,
    label: string,
    value?: string,
    error?: boolean,
    disabled?: boolean,
    success?: boolean,
    placeholder: string,
    onChange: (str: string) => void,
    size?: 'large' | 'medium' | 'small';
    condition?: 'disabled' | 'error';
}


export const Input = ({
    id,
    label ='',
    placeholder ='',
    disabled =false,
    success = false,
    error = false,
    onChange,
    value ,
    size = 'medium',
    ...props
}:InputProps) => {
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (event) => {
    //   setInputValue(event.target.value);
    // };

  
    return (
        <div className='input'>
            <label className='input--label'>
                {label}
            </label>
            <input 
                id={id} 
                className={`input--${size}`}
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                value={value}
                placeholder={placeholder} 
                {...props}/>
        </div>
    )
}

export default Input