import logo from "@/src/assets/icons/logo.svg";
import Image from "next/image";

const Header: React.FC  = () => {
    return <header className="h-20 w-full flex items-center text-gray-100 bg-primary/5 p-6">
        <Image src={logo} alt="Logo" className="h-12 w-fit opacity-95" />
        <div className="flex-1 bg-accent h-full ml-6">

        </div>
    </header>
}

export default Header;
