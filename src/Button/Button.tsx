import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary'; 
    primary?: boolean; 
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    disabled?: boolean;
    disableStyle: string;
    onClick?: () => void;
}


export const Button = ({
    variant='primary',
    primary = false,
    size = 'medium',
    disabled = false,
    disableStyle,
    children,
    ...props
}: ButtonProps) => {
    //   const mode = primary ? 'button--primary' : 'button--secondary';

    if(disabled) {
      var disableStyle = 'disabled'
    }

    return (
    <button
      type="button"
      disabled={disabled}
      className={
        ['button', `button--${size}`, `button--${variant}`, `button--${disableStyle}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
