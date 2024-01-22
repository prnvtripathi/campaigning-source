import { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import politicsData from "@/data/politicsData";
import businessData from "@/data/businessData";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const inputRef = useRef(null);

    const filteredPoliticsData = politicsData.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
    );

    const filteredBusinessData = businessData.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Check if either left Alt key or right Alt key is pressed simultaneously with "s"
            if (
                (e.key.toLowerCase() === "s" && e.altKey) ||
                (e.key.toLowerCase() === "s" && e.getModifierState("AltGraph"))
            ) {
                setIsVisible(true);
            }
        };

        const handleClickOutside = (e) => {
            // Close the search bar if clicked outside
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setIsVisible(false);
            }
        };

        // Add event listeners
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClickOutside);

        // Remove event listeners on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [inputRef]);

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                <div className="bg-bg w-full h-full absolute top-0 left-0 z-10 backdrop-blur-md bg-opacity-50">
                    <div className="space-y-6 left-14 right-14 absolute top-44 transform">
                        <form className="relative">
                            <input
                                ref={inputRef}
                                className="w-full p-2 pl-10 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                                placeholder="Search services..."
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <IoMdSearch className="absolute top-2.5 left-3 h-5 w-5 text-gray-500" />
                        </form>
                        <div className="flex flex-row justify-around">
                            {search && filteredPoliticsData.length > 0 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">
                                        Political Promotion
                                    </h2>
                                    <div className="flex flex-col">
                                        {filteredPoliticsData?.map((item) => (
                                            <Link href={item.link} key={item.id}>
                                                <div className="p-1">
                                                    <h3 className="flex items-center text-gray-300 font-semibold text-lg">
                                                        <span className="mr-2 text-primaryText/70">{item.logo}</span>
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {search && filteredBusinessData.length > 0 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">
                                        Business Development
                                    </h2>
                                    <div className="flex flex-col">
                                        {filteredBusinessData?.map((item) => (
                                            <Link href={item.link} key={item.id}>
                                                <div className="p-1">
                                                    <h3 className="flex items-center text-gray-300 font-semibold text-lg">
                                                        <span className="mr-2 text-primaryText/70">{item.logo}</span>
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
