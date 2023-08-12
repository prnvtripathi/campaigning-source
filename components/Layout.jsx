import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import logo from "@/assets/logo.png"

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex justify-between items-center px-6'>
                <div className='p-4 '>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <ul className="navbar">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <div>
                    <button className="btn-primary"><FaGithub size={24} /> GitHub</button>
                </div>
            </div>
            <div className='container'>
                {children}
            </div>
        </>
    )
}

export default Layout