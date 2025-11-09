"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/src/assets/icons/logo.svg";
import Button from "../../atoms/button";
import HeaderMenu from "../../molecules/header-menu";

const headerItems = [
	{ title: "Home", url: "#home" },
	{ title: "Skills", url: "#skills" },
	{ title: "Projetos", url: "#projects" },
	{ title: "Sobre", url: "#about" },
];

const Header: React.FC = () => {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (
				open &&
				menuRef.current &&
				!menuRef.current.contains(target) &&
				buttonRef.current &&
				!buttonRef.current.contains(target)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;

		if (latest > previous && latest > 80) {
			setHidden(true);
			setOpen(false);
		} else {
			setHidden(false);
		}
	});

	const handleItemClick = (url?: string) => {
		if (url) {
			const target = document.querySelector(url);
			target?.scrollIntoView({ behavior: "smooth" });
		}
		setOpen(false);
	};

	return (
		<motion.header
			className="fixed h-20 max-w-lvw w-full flex justify-end backdrop-blur-xs items-center text-gray-50 bg-primary/5 md:py-6 px-5 lg:px-20 z-50"
			initial={{ y: 0, opacity: 1 }}
			animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			<div className="relative">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="right-2 lg:-right-5 -bottom-3 absolute size-28 rounded-full bg-primary blur-3xl opacity-30" />
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.6,
						delay: 0.2,
						ease: "easeOut",
					}}
					className="relative z-10"
				>
					<Image
						src={logo}
						alt="Logo"
						className="h-12 w-fit opacity-95"
						priority
					/>
				</motion.div>
			</div>
			<div className="hidden md:flex flex-row items-center justify-center flex-1 h-full ml-4 gap-5 lg:gap-12">
				<HeaderMenu
					headerMenuItems={headerItems.map((item, i) => ({
						...item,
						index: i + 1,
					}))}
				/>
				<Button variant="neon">Currículo</Button>
			</div>
			<button
				ref={buttonRef}
				type="button"
				className="md:hidden ml-auto text-gray-100 hover:text-primary focus:outline-none cursor-pointer transition-all duration-200"
				onClick={() => setOpen(!open)}
			>
				{open ? <X size={28} /> : <Menu size={28} />}
			</button>
			{open && (
				<div
					ref={menuRef}
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
						onItemClick={handleItemClick}
						className="flex-col items-center justify-center"
					/>
					<Button variant="neon">Currículo</Button>
				</div>
			)}
		</motion.header>
	);
};

export default Header;
