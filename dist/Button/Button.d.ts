import { ReactNode } from 'react';
import './Button.css';
interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    disabled?: boolean;
    disableStyle: string;
    hover?: boolean;
    hoverStyle: string;
    active?: boolean;
    activeStyle: string;
    onClick?: () => void;
}
export declare const Button: ({ variant, primary, size, disabled, disableStyle, hover, hoverStyle, active, activeStyle, children, ...props }: ButtonProps) => JSX.Element;
export {};
