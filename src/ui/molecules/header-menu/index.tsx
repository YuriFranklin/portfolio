import HeaderMenuItem, {
	type HeaderMenuItemProps,
} from "../../atoms/header-menu-item";

type HeaderMenuProps = {
	headerMenuItems: HeaderMenuItemProps[];
	className?: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
	headerMenuItems,
	className = "",
}) => {
	return (
		<div
			className={`flex w-full h-full items-center justify-end gap-2 md:gap-8 lg:gap-12
        flex-col md:flex-row ${className}`}
		>
			{headerMenuItems?.map((item) => (
				<HeaderMenuItem key={item.url} {...item} />
			))}
		</div>
	);
};

export default HeaderMenu;
