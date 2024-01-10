import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import UserProfile from "./UserProfile";
import Image from "next/image";
import { VscSignIn } from 'react-icons/vsc'
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const navItems = [
    {
        id: 0,
        name: "About",
        path: "/about",
    },
    {
        id: 1,
        name: "Contact",
        path: "/contact",
    },
    {
        id: 2,
        name: "Pricing",
        path: "/pricing",
    },
    {
        id: 3,
        name: "Swags",
        path: "/swags",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();
    const { pathname } = router;

    // function to toggle the menu button
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const inactiveLink =
        "text-white hover:text-yellow-700 hover:border-yellow-800 hover:border rounded-full py-1 px-2 font-normal transition-all";
    const activeLink =
        inactiveLink +
        " border text-yellow-700 border-yellow-800 rounded-full py-1 px-2 font-normal hover:border-green-500";

    return (
        <>
            <nav className="sticky bg-bg backdrop-blur-lg bg-opacity-40 top-0 w-full left-0 z-40 text-white">
                <div className="container max-w-full px-4 md:px-8">
                    <div className="flex items-center justify-between py-1 h-14 sm:h-20">
                        <Link href="/" className="transform scale-75 ">
                            <div className="flex items-center">
                                <Image
                                    src="/logo-white.png"
                                    alt="logo"
                                    width={500}
                                    height={500}
                                    className="left-0 p-1 w-60 mt-6 md:mt-0"
                                />
                            </div>
                        </Link>

                        {/* Menu button for mobile devices */}
                        <div className="md:hidden">
                            <button
                                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <IoMdClose /> : <FaBars />}
                            </button>
                        </div>

                        {/* desktop menu items */}
                        <ul className="md:flex md:items-center md:gap-8 mx-2 md:ml-4 hidden">
                            {navItems.map((item) => (
                                <Link href={item.path} key={item.id}>
                                    <li
                                        className={
                                            pathname.includes(item.path) ? activeLink : inactiveLink
                                        }
                                    >
                                        <p href={item.path}>{item.name}</p>
                                    </li>
                                </Link>
                            ))}

                            {!session ? (
                                <li>
                                    <Link
                                        className="bg-sky-500 text-white rounded-md py-1 px-1.5 flex items-center justify-center hover:bg-primaryText"
                                        href="/signin"
                                    >
                                        <VscSignIn className="inline-block mr-1" />
                                        Sign In
                                    </Link>
                                </li>
                            ) : (
                                <UserProfile />
                            )}
                        </ul>

                        {/* mobile menu items */}
                        <ul
                            className={`${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                                } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-bg bg-opacity-60`}
                        >
                            {navItems.map((item) => (
                                <Link href={item.path} key={item.id}>
                                    <li className="pl-10 py-2">
                                        <p>{item.name}</p>
                                    </li>
                                </Link>
                            ))}

                            {!session ? (
                                <Link
                                    className="bg-sky-500 text-white rounded-md py-1 px-1.5 flex items-center justify-center hover:bg-primaryText w-1/4 ml-8 my-2"
                                    href="/signin"
                                >
                                    <li>Sign In</li>
                                </Link>
                            ) : (
                                <UserProfile />
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
