import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'; 
  primary?: boolean; 
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  onClick?: () => void;
}


export const Button = ({
    variant='primary',
  primary = false,
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
//   const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={
        ['button', `button--${size}`, `button--${variant}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
