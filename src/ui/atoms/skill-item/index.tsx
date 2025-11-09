"use client";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SkillItemProps = {
	icon: LucideIcon;
	title: string;
	items: string[];
	index?: number;
};

const SkillItem: React.FC<SkillItemProps> = ({
	icon: Icon,
	title,
	items,
	index = 0,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 0.6,
				delay: index * 0.1,
				ease: "easeOut",
			}}
			viewport={{ amount: 0.3 }}
			className="
				flex flex-col gap-4 items-center
				text-gray-50/90 transition duration-200
				group border border-primary/50 rounded-lg hover:border-primary
				p-10 bg-transparent
			"
		>
			<div className="text-primary group-hover:scale-110 transition-transform duration-200">
				<Icon size={36} />
			</div>
			<span className="font-medium text-lg text-center">{title}</span>
			<p className="flex flex-col items-center gap-0.5">
				{items.map((item) => (
					<span key={item} className="text-gray-400/90 text-sm">
						{item}
					</span>
				))}
			</p>
		</motion.div>
	);
};

export default SkillItem;
