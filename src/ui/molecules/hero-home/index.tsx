"use client";

import { useEffect, useState } from "react";
import Button from "../../atoms/button";

interface HeroContentProps {
	greeting: string;
	name: string;
	title: string;
	description: string;
}

const HeroHome: React.FC<HeroContentProps> = ({
	greeting,
	name,
	title,
	description,
}) => {
	const [textIndex, setTextIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		if (textIndex < name.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + name[textIndex]);
				setTextIndex(textIndex + 1);
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [textIndex, name]);

	return (
		<div
			className="
        flex flex-col gap-4 justify-center w-fit text-left
        transform -translate-y-[10vh] relative z-10
        p-5
        lg:ml-[calc(--spacing(38)+44px)]
      "
		>
			<div className="absolute top-1/2 left-1/2 size-11/12 rounded-full bg-primary blur-3xl opacity-10 -translate-x-2/3 -translate-y-1/3" />
			<h3 className="text-gray-100/90 text-sm md:text-base lg:text-base">
				{greeting}
			</h3>
			<h1
				className="
          text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider
          bg-linear-to-l from-primary via-[#7948e4] to-[#926aea]
          text-transparent bg-clip-text
          animate-gradient
        "
			>
				{displayedText}
				<span className="animate-blink text-primary">|</span>
			</h1>
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl md:text-3xl lg:text-3xl text-gray-100/90">
					{title}
				</h2>
				<p className="text-gray-100/90 text-sm md:text-base lg:text-base leading-relaxed max-w-lg [word-spacing:0.3rem]">
					{description}
				</p>
				<div className="mt-4 flex items-center gap-5 w-full justify-center md:justify-start">
					<Button variant="filled">Ver Projetos</Button>
					<Button variant="outlined">Contato</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroHome;
