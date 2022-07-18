import './input.css';
declare type AllProps = Condition & InputProps;
declare type Condition = {
    disabled?: boolean;
    success?: boolean;
<<<<<<< HEAD
    errors?: boolean;
=======
>>>>>>> 1b6296ab762275497cd31842a48f3ad8d5ae8805
};
declare type InputProps = {
    id: string;
    errorStyle: string;
    errorMessage: string;
    label: string;
    value?: string;
    placeholder: string;
    onChange: (str: string) => void;
    size?: 'large' | 'medium' | 'small';
};
<<<<<<< HEAD
export declare const Input: ({ id, label, placeholder, disabled, errors, errorStyle, errorMessage, onChange, value, size, ...props }: AllProps) => JSX.Element;
=======
export declare const Input: ({ id, label, placeholder, disabled, onChange, value, size, ...props }: AllProps) => JSX.Element;
>>>>>>> 1b6296ab762275497cd31842a48f3ad8d5ae8805
export default Input;
