const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-gradient-to-r from-slate-500 to-slate-800 text-center rounded-md">
            <p className="py-4">© {year} Campaigning Source Pvt. Ltd.</p>
        </footer>
    )
}

export default Footer;