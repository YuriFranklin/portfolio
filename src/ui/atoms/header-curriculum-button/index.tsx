const HeaderCurriculumButton: React.FC = () => {
	return (
		<button
			type="button"
			className="
        h-fit
				relative
				cursor-pointer
				border border-primary
				rounded-md
				px-6 py-3
				flex items-center justify-center
				text-center
				transition-all duration-200
        text-gray-100
        hover:text-white
        shadow-[inset_0_0_26px_var(--color-primary)]
        hover:shadow-[inset_0_0_26px_var(--color-primary),0_0_8px_var(--color-primary),0_0_16px_var(--color-primary)]
			"
		>
			Currículo
		</button>
	);
};

export default HeaderCurriculumButton;
