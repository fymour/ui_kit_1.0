/// <reference types="react" />
import './input.css';
declare type AllProps = Condition & InputProps;
declare type Condition = {
    disabled?: boolean;
    success?: boolean;
<<<<<<< HEAD
};
declare type InputProps = {
    id: string;
=======
<<<<<<< HEAD
    errors?: boolean;
=======
>>>>>>> 1b6296ab762275497cd31842a48f3ad8d5ae8805
};
declare type InputProps = {
    id: string;
    errorStyle: string;
    errorMessage: string;
>>>>>>> 2a36e9e913da5a2f94d46b98f54f4c8df29b3ff6
    label: string;
    value?: string;
    placeholder: string;
    onChange: (str: string) => void;
    size?: 'large' | 'medium' | 'small';
};
<<<<<<< HEAD
export declare const Input: ({ id, label, placeholder, disabled, onChange, value, size, ...props }: AllProps) => JSX.Element;
=======
<<<<<<< HEAD
export declare const Input: ({ id, label, placeholder, disabled, errors, errorStyle, errorMessage, onChange, value, size, ...props }: AllProps) => JSX.Element;
=======
export declare const Input: ({ id, label, placeholder, disabled, onChange, value, size, ...props }: AllProps) => JSX.Element;
>>>>>>> 1b6296ab762275497cd31842a48f3ad8d5ae8805
>>>>>>> 2a36e9e913da5a2f94d46b98f54f4c8df29b3ff6
export default Input;
