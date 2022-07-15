import './input.css';
interface InputProps {
    id: string;
    label: string;
    value?: string;
    error?: boolean;
    disabled?: boolean;
    success?: boolean;
    placeholder: string;
    onChange: (str: string) => void;
    size?: 'large' | 'medium' | 'small';
    condition?: 'disabled' | 'error';
}
export declare const Input: ({ id, label, placeholder, disabled, success, error, onChange, value, size, ...props }: InputProps) => JSX.Element;
export default Input;
