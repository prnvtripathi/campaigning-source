import { Montserrat } from "next/font/google"
import ContactForm from "./ContactForm"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700],
})

const Contact = () => {
    return (
        <div className="bg-blue-200 my-2 px-2 rounded-md">
            <span className={montserrat.className}><h1 className="title py-4 text-black">Contact Us</h1></span>
            <div className="flex justify-around items-center py-4">
                <div className="outline p-2 rounded-md w-[25%]">
                    <ContactForm />
                </div>
                <div className="p-2 outline rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.87140791622!2d77.44511047522582!3d28.63361588403194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1691946892434!5m2!1sen!2sin"
                        width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-none rounded-md"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact