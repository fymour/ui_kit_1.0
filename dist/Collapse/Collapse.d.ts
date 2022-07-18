import './collapse.css';
interface CollpaseProps {
    open?: boolean;
    children: string;
    title: string;
}
export declare const Collapse: ({ open, children, title, }: CollpaseProps) => JSX.Element;
export default Collapse;
