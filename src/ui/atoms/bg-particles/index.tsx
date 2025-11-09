import type { IOptions, RecursivePartial } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const BgParticles: React.FC = () => {
	const [init, setInit] = useState(false);

	const options: RecursivePartial<IOptions> = useMemo(
		() => ({
			fullScreen: { enable: false },
			background: { color: { value: "transparent" } },
			fpsLimit: 144,
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
					value: 120,
					density: { enable: true, area: 800 },
				},
				opacity: { value: 0.5 },
				shape: { type: "circle" },
				size: { value: { min: 1, max: 3 } },
			},
		}),
		[],
	);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	if (!init) return null;

	return (
		<Particles id="tsparticles" options={options} className="h-full w-full" />
	);
};

export default BgParticles;
