"use client";
import { motion } from "framer-motion";
import SkillsGrid from "../../molecules/skills-grid";

const SkillsSection: React.FC = () => {
	return (
		<section
			id="skills"
			className="min-h-screen flex flex-col relative p-5 lg:pr-0 md:ml-24 lg:ml-0"
		>
			<div className="absolute z-0 top-1/2 left-1/2 size-11/12 rounded-full bg-primary blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2" />
			<header className="flex items-center gap-10 h-20 lg:ml-[calc(--spacing(38)+44px)] lg:mr-20">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.4,
						delay: 0.4,
						ease: "easeOut",
					}}
					viewport={{ amount: 0.3 }}
					className="flex justify-center items-end gap-6"
				>
					<p className="text-lg md:text-xl text-primary font-bold">02.</p>
					<h2 className="text-gray-50 text-2xl md:text-3xl lg:text-3xl">
						Technical <span className="text-primary font-semibold">Skills</span>
					</h2>
				</motion.div>
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
					className="flex-1 h-0.5 bg-gray-500/80 origin-right"
				/>
			</header>
			<div className="z-10">
				<SkillsGrid />
			</div>
		</section>
	);
};

export default SkillsSection;
