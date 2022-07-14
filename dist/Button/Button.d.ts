import { ReactNode } from 'react';
import './Button.css';
interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ variant, primary, size, children, ...props }: ButtonProps) => JSX.Element;
export {};
