import Logo from "./Logo"
import Link from "next/link"

const Layout = ({ children }) => {
    return (
        <>
            
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout