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
    active?: boolean; 
    activeStyle: string;
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
    active = true,
    activeStyle,
    children,
    ...props
}: ButtonProps) => {
    //   const mode = primary ? 'button--primary' : 'button--secondary';

   

    if(hover){
      var hoverStyle = 'hover'
    }

    if(active) {
      var activeStyle = 'active'
    }

    if(disabled) {
      var disableStyle = 'disabled'
      hoverStyle = ''
      activeStyle = ''
    }


    // const aidar= 'aidar'
    
    return (
    <button
      type="button"
      disabled={disabled}
      
      className={
        ['button', `button--${size}`, `button--${variant}`, `button--${disableStyle}-${variant}`, `button--${hoverStyle}-${variant}`, `button--${activeStyle}-${variant}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
