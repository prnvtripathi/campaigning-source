import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <>
            <div className="sticky top-0 left-0 right-0 bg-[#e3e3e4] z-10">
                <div className="offers">
                    <h3>Boost your business in this festive season to the new heights. 🗻</h3>
                </div>
                <div className='flex justify-around items-center px-6 mb-4'>
                    <div>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={225}
                                height={225}
                                className="p-2"
                            />
                        </Link>
                    </div>
                    <ul className="navbar">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Influencers</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Services</Link></li>
                        <li><Link href="/contact">Pricing</Link></li>
                        <li><Link href="/contact">Offers</Link></li>
                        <li><Link href="/contact">Internship</Link></li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <div className='container'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout