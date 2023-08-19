import clsx from "clsx";
import { ChangeEventHandler } from "react";

interface InputProps {
  type: "text" | "submit" | "reset";
  placeholder?: string;
  label?: string;
  variant: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: boolean;
  ref?: React.MutableRefObject<null>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  label,
  variant,
  disabled,
  error,
  onChange,
  value,
  className,
}) => {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={onChange}
        value={value}
        className={clsx(
          `
          rounded-md
          p-2
          border-2

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
          error && "ring-red-500 ring-offset-1 ring-2"
        )}
      />
    </label>
  );
};

export default Input;
