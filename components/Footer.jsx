import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-blue-100 text-center rounded-md text-black">
            <div className="flex justify-around items-center px-5 pt-2">
                <Link href='/'>
                    <Image src={logo} alt="logo" width={200} height={200} />
                </Link>
                <div>
                    <ul className="text-left">
                        <li className="hover:underline"><Link href="/">Home</Link></li>
                        <li className="hover:underline"><Link href="/contact">Influencers</Link></li>
                        <li className="hover:underline"><Link href="/about">About Us</Link></li>
                        <li className="hover:underline"><Link href="/contact">Contact</Link></li>
                        <li className="hover:underline"><Link href="https://myfameguru.com/">Social Media Boost</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center">
                <div className="flex items-center text-2xl gap-4 mt-2 px-2">
                    <Link href="https://github.com/prnvtripathi/campaigning-source" className="transition-all ease-in-out duration-200 hover:text-gray-500 hover:scale-125"><FaGithub /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaTwitter /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"><FaFacebook /></Link>
                    <Link href="/" className="transition-all ease-in-out duration-200 hover:text-purple-500 hover:scale-125"><FaInstagram /></Link>
                </div>
                <p className="py-4 select-none">© {year} Campaigning Source</p>
            </div>
        </footer>
    )
}

export default Footer;