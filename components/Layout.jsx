import Footer from "./Footer"
import Chatbot from "./Chatbot"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Chatbot />
        </>
    )
}

export default Layout
