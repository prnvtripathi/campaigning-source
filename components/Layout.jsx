import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import Footer from "./Footer"
import Analytics from "@vercel/analytics/react"

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex justify-around items-center px-6 mb-4'>
                <div className='p-4 '>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={225}
                            height={225}
                        />
                    </Link>
                </div>
                <ul className="navbar">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='container'>
                {children}
                <Analytics />
            </div>
            <Footer />
        </>
    )
}

export default Layout