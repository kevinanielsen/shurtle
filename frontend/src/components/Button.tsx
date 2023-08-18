import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  variant: "sm" | "md" | "lg";
  disabled?: boolean;
  color?: "primary" | "secondary";
  label?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  color,
  label,
  children,
}) => {
  return (
    <label>
      {label && <p>{label}</p>}
      <button
        disabled={disabled}
        className={clsx(
          `
            p-4
            rounded-md
            font-bold
            
            hover:scale-105
            active:scale-95

            focus:ring-2
            focus:ring-main-500
            focus:outline-none
            focus:ring-offset-1

            focus:transition-all
            transition-all
            duration-100
          `,
          variant === "sm" && "text-sm",
          variant === "md" && "text-base",
          variant === "lg" && "text-lg",
          disabled && "opacity-75",
          color === "secondary" && "bg-accent-500",
          (!color || color === "primary") && "bg-main-500 text-white"
        )}
      >
        {children}
      </button>
    </label>
  );
};

export default Button;
