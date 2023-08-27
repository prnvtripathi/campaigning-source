import Layout from "@/components/Layout"
import Head from "next/head"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const createAlert = (message) => {
        const alertBox = document.querySelector('.alert');
        alertBox.innerHTML = message;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9mzszs5', 'template_nez5obe', form.current, 'NkREpU3WwM0aYiRku')
            .then((result) => {
                createAlert('Message Sent Successfully!');
                console.log(result.text);
            }, (error) => {
                createAlert('Message Sending Failed!, Try Again Later!');
                console.log(error.text);
            });
    }

    return (
        <>
            <Head>
                <title>Contact Us | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="title">Contact Us</h1>
                    <div className="flex justify-around items-center w-full my-3 bg-[#FFDBC3] py-5 rounded-lg">
                        <div className="outline p-2 rounded-md w-[35%]">
                            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder='Your Name' required />
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder='Your Email' required />
                                <label>What service do you require?</label>
                                <select name="service" required>
                                    <option value="None">{`<`}Select{`>`}</option>
                                    <option value="Campaigning">Campaigning</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="Website Development">Website Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="SEO">SEO</option>
                                    <option value="Content Writing">Content Writing</option>
                                    <option value="Graphic Designing">Graphic Designing</option>
                                    <option value="Video Editing">Video Editing</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Videography">Videography</option>
                                    <option value="Others">Others</option>
                                </select>
                                <label>For?</label>
                                <input type="text" name="purpose" placeholder='For? Like Company, Political Party etc.' required />
                                <label>Message</label>
                                <textarea name="message" placeholder='Your Message' required />
                                <button className='btn-primary'>Send</button>
                            </form>
                            <div className="alert"></div>
                        </div>
                        <div className="p-2 outline rounded-xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.87140791622!2d77.44511047522582!3d28.63361588403194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1691946892434!5m2!1sen!2sin"
                                width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-none rounded-md"></iframe>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact