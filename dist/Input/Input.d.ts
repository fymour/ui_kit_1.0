import './input.css';
declare type AllProps = Condition & InputProps;
declare type Condition = {
    disabled?: boolean;
    success?: boolean;
    errors?: boolean;
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
export declare const Input: ({ id, label, placeholder, disabled, errors, errorStyle, errorMessage, onChange, value, size, ...props }: AllProps) => JSX.Element;
export default Input;
