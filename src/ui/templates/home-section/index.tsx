"use client";
import { ChevronDown } from "lucide-react";
import BgParticles from "../../atoms/bg-particles";
import HeroHome from "../../molecules/hero-home";

const HomeSection: React.FC = () => {
	return (
		<section
			id="home"
			className="relative flex justify-center lg:justify-start items-center h-screen overflow-hidden"
		>
			<div className="absolute inset-0 overflow-hidden z-0">
				<BgParticles />
			</div>
			<HeroHome
				greeting="Olá, me chamo"
				name="Yuri Franklin."
				title="Desenvolvedor Back-end."
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since o 1500s."
			/>
			<button
				type="button"
				onClick={() => {
					const nextSection = document.querySelector("#skills");
					nextSection?.scrollIntoView({ behavior: "smooth" });
				}}
				className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end text-gray-100/90 group cursor-pointer"
			>
				<span className="mb-1 text-sm group-hover:text-primary">
					Role para baixo
				</span>
				<ChevronDown className="w-6 h-6 animate-bounce text-primary transition-all duration-200 group-hover:filter-[drop-shadow(0_0_30px_var(--color-primary))]" />
			</button>
		</section>
	);
};

export default HomeSection;
