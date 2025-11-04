"use client";
import { usePathname } from "next/navigation";

export type HeaderMenuItemProps = {
	title: string;
	url?: string;
	index: number;
};

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
	index,
	title,
	url,
}) => {
	const formattedIndex: string =
		index !== undefined ? index.toString().padStart(2, "0") : "";
	const pathname = usePathname();
	const isActive = !url || url === "" ? pathname === "/" : pathname === url;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!url || url === "") return;
		const target = document.querySelector(url);
		target?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<button
			type="button"
			className="relative group flex justify-center items-center gap-1 cursor-pointer text-gray-100 group group-hover:bg-primary transition-all duration-200 w-full md:w-fit p-4 md:p-0"
			onClick={handleClick}
		>
			<p className="text-sm text-primary font-bold">{`${formattedIndex}.`}</p>
			<h3
				className={`text-base transition-all duration-200 group-hover:text-primary ${isActive && "text-primary"}`}
			>
				{title}
			</h3>
			<span
				className={`
          hidden md:block
          absolute bottom-0 left-0 h-0.5 w-0
          bg-primary
          transition-all duration-100
          transform translate-y-1
          shadow-[0_0_8px_var(--color-primary)]
          ${isActive ? "w-full text-white" : "w-0 group-hover:w-full group-hover:text-white"}
        `}
			/>
			{isActive && (
				<span className="absolute shadow-[0_0_8px_var(--color-primary)] left-0 top-0 bottom-0 w-1 h-full bg-primary md:hidden" />
			)}
		</button>
	);
};

export default HeaderMenuItem;
