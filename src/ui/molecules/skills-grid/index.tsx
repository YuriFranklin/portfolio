"use client";
import { Boxes, Database, Layers, Layout, Server, Wrench } from "lucide-react";
import SkillItem from "../../atoms/skill-item";

const skills = [
	{
		icon: Layout,
		title: "Front-end",
		items: [
			"Next.js",
			"Vite",
			"React",
			"HTML e CSS",
			"Tailwind / Styled Components",
			"TypeScript",
		],
	},
	{
		icon: Server,
		title: "Back-end",
		items: [
			"Typescript",
			"Node.js",
			"NestJS",
			"Express",
			"C#",
			".Net Core",
			"RestFull",
			"GraphQL",
		],
	},
	{
		icon: Wrench,
		title: "DevOps",
		items: [
			"Docker",
			"Kubernetes (k3s)",
			"ArgoCD",
			"Jenkins",
			"Nexus Repository",
			"Velero",
			"Nginx Ingress",
			"Ansible",
			"Linux",
		],
	},
	{
		icon: Database,
		title: "Banco de Dados e Mensageria",
		items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Nats", "Nats KV"],
	},
	{
		icon: Boxes,
		title: "Arquitetura",
		items: ["Clean Architecture", "DDD", "TDD"],
	},
	{
		icon: Layers,
		title: "Princípios de Design",
		items: ["SOLID", "DRY", "KISS", "YAGNI"],
	},
];

const SkillsGrid: React.FC = () => {
	return (
		<div
			className="
				grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
				gap-6 mt-5 lg:ml-[calc(--spacing(38)+44px)] lg:mr-20
				auto-rows-fr
			"
		>
			{skills.map((skill, i) => (
				<SkillItem key={skill.title} {...skill} index={i} />
			))}
		</div>
	);
};

export default SkillsGrid;
