import { ReactNode } from 'react';
import './Button.css';
interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, children, ...props }: ButtonProps) => JSX.Element;
export {};
