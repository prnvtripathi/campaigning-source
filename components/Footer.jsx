import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-[#2a5086] text-center rounded-md flex flex-col justify-around items-center text-secondaryText">
            <div className="flex items-center text-3xl gap-4 mt-3 p-2">
                <Link href="https://github.com/prnvtripathi/campaigning-source" className="transition-all ease-in-out duration-200 hover:text-gray-500 hover:scale-125"><FaGithub /></Link>
                <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaTwitter /></Link>
                <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaFacebook /></Link>
                <Link href="/" className="transition-all ease-in-out duration-200 hover:text-purple-500 hover:scale-125"><FaInstagram /></Link>
            </div>
            <p className="py-4">© {year} Campaigning Source</p>
        </footer>
    )
}

export default Footer;