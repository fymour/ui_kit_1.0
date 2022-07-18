/// <reference types="react" />
import './input.css';
declare type AllProps = Condition & InputProps;
declare type Condition = {
    disabled?: boolean;
    success?: boolean;
};
declare type InputProps = {
    id: string;
    label: string;
    value?: string;
    placeholder: string;
    onChange: (str: string) => void;
    size?: 'large' | 'medium' | 'small';
};
export declare const Input: ({ id, label, placeholder, disabled, onChange, value, size, ...props }: AllProps) => JSX.Element;
export default Input;
