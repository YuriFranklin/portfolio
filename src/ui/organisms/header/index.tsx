"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/src/assets/icons/logo.svg";
import HeaderCurriculumButton from "../../atoms/header-curriculum-button";
import HeaderMenu from "../../molecules/header-menu";

const headerItems = [
	{ title: "Home" },
	{ title: "Skills", url: "#skills" },
	{ title: "Sobre", url: "#about" },
	{ title: "Projetos", url: "#projects" },
];

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="relative h-20 max-w-lvw w-full flex justify-end items-center text-gray-100 bg-primary/5 md:py-6 px-5 lg:px-20">
			<div className="relative">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="right-2 lg:-right-5 -bottom-3 absolute size-28 rounded-full bg-primary blur-3xl opacity-30" />
				</div>
				<Image
					src={logo}
					alt="Logo"
					className="h-12 w-fit opacity-95 relative z-10"
				/>
			</div>

			<div className="hidden md:flex flex-row items-center justify-center flex-1 h-full ml-4 gap-5 lg:gap-12">
				<HeaderMenu
					headerMenuItems={headerItems.map((item, i) => ({
						...item,
						index: i + 1,
					}))}
				/>
				<HeaderCurriculumButton />
			</div>
			<button
				type="button"
				className="md:hidden ml-auto text-gray-100 hover:text-primary focus:outline-none cursor-pointer transition-all duration-200"
				onClick={() => setOpen(!open)}
			>
				{open ? <X size={28} /> : <Menu size={28} />}
			</button>
			{open && (
				<div
					className="
						absolute top-20 left-0 w-full bg-black/90
            z-50
						flex flex-col items-center gap-4 pb-6
						border-primary border-b
						animate-slideDown
						md:hidden
					"
				>
					<HeaderMenu
						headerMenuItems={headerItems.map((item, i) => ({
							...item,
							index: i + 1,
						}))}
						className="flex-col items-center justify-center"
					/>
					<HeaderCurriculumButton />
				</div>
			)}
		</header>
	);
};

export default Header;
