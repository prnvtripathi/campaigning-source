import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Footer from "./Footer";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Layout = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <div className="sticky top-0 left-0 right-0 z-10">
                <div className="offers">
                    <h3>Boost your business in this festive season to new heights. 🗻</h3>
                </div>
                <div className='flex justify-around items-center bg-[#E3E3E4] px-6 mb-4 bg-opacity-80'>
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
                        <li>
                            <div className="relative group">
                                <Link
                                    href="#"
                                    className="group flex items-center"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    Services{isDropdownOpen ? <MdArrowDropUp size={28} /> : <MdArrowDropDown size={28} />}
                                </Link>
                                {isDropdownOpen && (
                                    <div className="absolute top-10 right-0 bg-[#e2e2e2] shadow-lg transition ease-in-out duration-200">
                                        <ul className="p-2">
                                            <li className="min-w-max"><Link href="/services/politics">Political Election Promotion</Link></li>
                                            <li className="min-w-max"><Link href="/services/business">Business Development</Link></li>
                                            <li className="min-w-max"><Link href="/services/default2">Website & Application Development</Link></li>
                                            <li className="min-w-max"><Link href="/services/default">IVR, Bulk SMS, Whatsapp Broadcasts</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
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
    );
}

export default Layout;