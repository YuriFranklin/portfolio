"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export type HeaderMenuItemProps = {
	title: string;
	url?: string;
	index: number;
	onClick?: (url?: string) => void;
};

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
	index,
	title,
	url,
	onClick,
}) => {
	const formattedIndex = index.toString().padStart(2, "0");
	const pathname = usePathname();
	const isActive = !url || url === "" ? pathname === "/" : pathname === url;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (url) {
			const target = document.querySelector(url);
			target?.scrollIntoView({ behavior: "smooth" });
		}
		onClick?.(url);
	};

	const direction = -30;

	return (
		<motion.button
			type="button"
			onClick={handleClick}
			initial={{ opacity: 0, x: direction }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: "easeOut",
			}}
			className={`
				relative group flex justify-center items-center gap-1
				cursor-pointer text-gray-50
				transition-all duration-200
				w-full md:w-fit p-4 md:p-0
			`}
		>
			<p className="text-sm text-primary font-bold">{`${formattedIndex}.`}</p>

			<h3
				className={`
					text-base transition-all duration-200
					${isActive ? "text-primary" : "group-hover:text-primary"}
				`}
			>
				{title}
			</h3>
			<span
				className={`
					hidden md:block absolute bottom-0 left-0 h-0.5
					bg-primary transform translate-y-1
					transition-all duration-200 shadow-[0_0_8px_var(--color-primary)]
					${isActive ? "w-full" : "w-0 group-hover:w-full"}
				`}
			/>
			{isActive && (
				<span className="absolute left-0 top-0 bottom-0 w-1 h-full bg-primary md:hidden shadow-[0_0_8px_var(--color-primary)]" />
			)}
		</motion.button>
	);
};

export default HeaderMenuItem;
