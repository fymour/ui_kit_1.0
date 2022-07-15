import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary'; 
    primary?: boolean; 
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    disabled?: boolean;
    disableStyle: string;
    hover?:boolean;
    hoverStyle: string;
    onClick?: () => void;
}


export const Button = ({
    variant='primary',
    primary = false,
    size = 'medium',
    disabled = false,
    disableStyle,
    hover = false,
    hoverStyle,
    children,
    ...props
}: ButtonProps) => {
    //   const mode = primary ? 'button--primary' : 'button--secondary';

    if(disabled) {
      var disableStyle = 'disabled'
    }

    if(hover){
      var hoverStyle = 'hover'
    }

    return (
    <button
      type="button"
      disabled={disabled}
      
      className={
        ['button', `button--${size}`, `button--${variant}`, `button--${disableStyle}-${variant}`, `button--${hoverStyle}-${variant}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
