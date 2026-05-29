import { ButtonProps } from "@/src/types/button";

//Boton reutilizable 
export default function Button ({
    text,
    onClick,
    type = "button",
    disabled = false,
    className = "",
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        >
            {text}
        </button>
    )
}
