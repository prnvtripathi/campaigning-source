import Footer from "./Footer"
import Chatbot from "./Chatbot"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
            {/* <Chatbot /> */}
        </>
    )
}

export default Layout
