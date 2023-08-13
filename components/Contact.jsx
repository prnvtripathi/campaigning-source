import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700],
})

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 my-2 px-2 rounded-md">
            <span className={montserrat.className}><h1 className="text-4xl font-bold text-center py-4">Contact Us</h1></span>
            <div className="flex justify-around items-center py-4">
                <div className="outline p-2 rounded-md w-[25%]">
                    <form className="flex flex-col justify-center items-center">
                        <label className="text-xl font-bold">First Name</label>
                        <input type="text" className="input half" required/>
                        <label className="text-xl font-bold">Last Name</label>
                        <input type="text" className="input half" required/>
                        <label className="text-xl font-bold">Email</label>
                        <input type="email" className="input half" required/>
                        <label className="text-xl font-bold">Phone</label>
                        <input type="tel" className="input half" required/>
                        <label className="text-xl font-bold">Message</label>
                        <textarea className="input" required/>
                        <button className="btn-primary justify-center items-center mt-2 w-40">Submit</button>
                    </form>
                </div>
                <div className="p-2 outline rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.87140791622!2d77.44511047522582!3d28.63361588403194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1691946892434!5m2!1sen!2sin"
                        width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-none rounded-md"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact