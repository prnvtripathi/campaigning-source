import { useState, useEffect } from "react";
import Footer from "./Footer"
import Chatbot from "./Chatbot"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import Cookies from "./Cookies"

const Layout = ({ children }) => {
    const [isCookieVisible, setCookieVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCookieVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const closeDialog = () => {
        setCookieVisible(false);
    };
    return (
        <>
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
            {/* <Chatbot /> */}
            {isCookieVisible && <Cookies closeDialog={closeDialog} />}

        </>
    )
}

export default Layout
