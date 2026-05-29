export interface ButtonProps {
    onClick?: () => void;
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}
