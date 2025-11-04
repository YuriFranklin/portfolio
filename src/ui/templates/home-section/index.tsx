"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const HomeSection: React.FC = () => {
	const [textIndex, setTextIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const fullText = "Yuri Franklin.";

	useEffect(() => {
		if (textIndex < fullText.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + fullText[textIndex]);
				setTextIndex(textIndex + 1);
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [textIndex]);

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	const options = useMemo(
		() => ({
			background: { color: { value: "transparent" } },
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: { enable: true, mode: "push" },
					onHover: { enable: true, mode: "repulse" },
				},
				modes: {
					push: { quantity: 2 },
					repulse: { distance: 100, duration: 0.4 },
				},
			},
			particles: {
				color: { value: "#6639f9" },
				links: {
					color: "#6639f9",
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1,
					direction: "none" as const,
					random: false,
					straight: false,
					outModes: { default: "out" as const },
				},
				number: {
					value: 80,
					density: { enable: true, area: 800 },
				},
				opacity: { value: 0.5 },
				shape: { type: "circle" },
				size: { value: { min: 1, max: 3 } },
			},
			detectRetina: true,
		}),
		[],
	);

	if (!init) return null;

	return (
		<section className="relative flex justify-center lg:justify-start items-center h-[calc(100vh-80px)] overflow-hidden">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<Particles
					id="tsparticles"
					options={options}
					className="h-full w-full"
				/>
			</div>
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
					Olá, me chamo
				</h3>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-wider">
					{displayedText}
					<span className="animate-blink">|</span>
				</h1>
				<div className="flex flex-col gap-3">
					<h2 className="text-2xl md:text-3xl lg:text-3xl text-gray-200/90">
						Desenvolvedor Back-end.
					</h2>
					<p className="text-gray-200/90 text-sm md:text-base lg:text-base leading-relaxed max-w-lg [word-spacing:0.3rem]">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since o 1500s.
					</p>
				</div>
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end text-gray-200/90 group">
				<span className="mb-1 text-sm group-hover:text-primary">
					Role para baixo
				</span>
				<ChevronDown className="w-6 h-6 animate-bounce text-primary transition-all duration-200 group-hover:filter-[drop-shadow(0_0_30px_var(--color-primary))]" />
			</div>
		</section>
	);
};

export default HomeSection;
