"use client";
import Header from "@/src/ui/organisms/header";
import SocialLine from "../ui/molecules/social-line";
import HomeSection from "../ui/templates/home-section";
import SkillsSection from "../ui/templates/skills-section";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Header />
			<div className="hidden md:block fixed bottom-0 left-[calc(--spacing(5)+22px)] lg:left-[calc(--spacing(20)+22px)] z-50">
				<SocialLine />
			</div>
			<HomeSection />
			<SkillsSection />
		</div>
	);
};

export default Home;
