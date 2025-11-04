import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const SocialLine: React.FC = () => {
	return (
		<div className="flex flex-col-reverse gap-4 h-120 w-fit items-center">
			<div className="flex-1 w-0.5 bg-gray-500/80" />

			<div className="flex flex-col gap-4 items-center">
				<a
					href="mailto:contato@yuri.dev.br"
					className="transition-all duration-200 text-gray-500/80 text-sm tracking-widest [writing-mode:vertical-rl] rotate-180 hover:text-primary"
				>
					contato@yuri.dev.br
				</a>

				<a
					href="https://linkedin.com/in/yuri-franklin"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-500/80 hover:text-primary transition-colors duration-200"
				>
					<SiLinkedin size={20} />
				</a>

				<a
					href="https://github.com/yurifranklin"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-500/80 hover:text-primary transition-colors duration-200"
				>
					<SiGithub size={20} />
				</a>

				<a
					href="https://instagram.com/yuriifranklin"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-500/80 hover:text-primary transition-colors duration-200"
				>
					<SiInstagram size={20} />
				</a>
			</div>
		</div>
	);
};

export default SocialLine;
