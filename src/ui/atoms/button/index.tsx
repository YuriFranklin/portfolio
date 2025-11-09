import clsx from "clsx";
import type React from "react";

type ButtonVariant = "filled" | "outlined" | "neon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	children,
	className,
	...props
}) => {
	const baseStyles =
		"h-fit relative cursor-pointer rounded-md px-6 py-3 flex items-center justify-center text-center font-medium transition-all duration-200";

	const variants: Record<ButtonVariant, string> = {
		filled: `
      bg-primary
      text-gray-50
      hover:brightness-110
      active:scale-95
    `,
		outlined: `
      border border-primary
      text-primary
      hover:bg-primary/10
      active:scale-95
    `,
		neon: `
      border border-primary
      text-gray-50
      hover:text-white
      shadow-[inset_0_0_26px_var(--color-primary)]
      hover:shadow-[inset_0_0_26px_var(--color-primary),0_0_8px_var(--color-primary),0_0_16px_var(--color-primary)]
      active:scale-95
    `,
	};

	return (
		<button
			type="button"
			className={clsx(baseStyles, variants[variant], className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
