import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const WhatsappButton = () => {
    const [isFloating, setIsFloating] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFloating(!isFloating);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [isFloating]);


    const handleWhatsappClick = () => {
        window.open('https://wa.link/3ik1jc', '_blank');
    };

    return (
        <>
            <div
                className="fixed z-10 bottom-8 right-6 w-12 h-12 rounded-full bg-green-500 flex justify-center items-center cursor-pointer shadow-md hover:bg-green-600 transition select-none"
                onClick={handleWhatsappClick}
            >
                {isFloating && (
                    <div class="relative inline-block">
                        <p class="absolute flex items-center justify-center w-48 py-3 text-white bg-bg rounded-lg shadow-lg -left-[9.5rem] -top-20">
                            <span class="truncate ">Wanna chat?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute rotate-45 right-4 bottom-0.5 -mb-3 transform text-bg fill-current" stroke="currentColor" viewBox="0 0 24 24" >
                                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                            </svg>
                        </p>
                    </div>
                )}
                <FaWhatsapp className="text-white text-3xl" />
            </div>
        </>
    );
};

export default WhatsappButton;
