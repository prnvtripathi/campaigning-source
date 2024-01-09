import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { FaDoorOpen, FaPhone, FaUsers, FaWikipediaW, FaMobile, FaVideo, FaTwitter } from "react-icons/fa"
import { GoGraph, GoFileMedia, GoBroadcast } from "react-icons/go"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { PiTelevisionSimpleLight } from "react-icons/pi"
import { MdOutlineArticle, MdWeb, MdOutlineEventSeat } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const montserrat = Montserrat({
    subsets: ["latin"],
    weights: [400, 500, 600, 700],
})

const services = [
    {
        icon: <FaDoorOpen />,
        title: "Door-to-Door Campaigning",
        description: "We understand the value of personal connections. Our D2D campaigns establish genuine rapport, ensuring your message reaches your intended audience on a personal level."
    },
    {
        icon: <GoGraph />,
        title: "Surveys and Data Analysis",
        description: "Informed decisions pave the path to success. Our meticulously designed surveys and insightful data analysis provide the foundation for strategic excellence.",
    },
    {
        icon: <GoFileMedia />,
        title: "Social Media Management",
        description: "In the digital landscape, SMM is paramount. Our skilled team excels in online engagement, amplifying your business or campaign's visibility."
    },
    {
        icon: <AiOutlineFundProjectionScreen />,
        title: "Graphics and Visual Communication",
        description: "Visuals hold immense power. Our creative experts craft captivating graphics that resonate deeply, leaving a lasting imprint on your audience."
    },
    {
        icon: <FaPhone />,
        title: "Interactive Voice Response (IVR)",
        description: "Merge automation with a personal touch. Our IVR solutions engage audiences effectively, delivering tailored messages and collecting invaluable feedback."
    },
    {
        icon: <GoBroadcast />,
        title: "Broadcast Messages",
        description: "Reach the masses effortlessly. Our broadcast messaging solutions disperse your message across diverse platforms, expanding your outreach significantly."
    },
    {
        icon: <PiTelevisionSimpleLight />,
        title: "TV and Social Platform Ads",
        description: "Capture attention on both traditional and digital channels with our targeted TV and social media advertising strategies."
    },
    {
        icon: <FaUsers />,
        title: "Bulk Calls",
        description: "Establish direct connections with a wide audience through our bulk calling services, ensuring your message is heard."
    },
    {
        icon: <MdOutlineArticle />,
        title: "Articles and Content Creation",
        description: "Craft compelling articles and content that resonate with your audience, positioning you as an authoritative voice in your industry."
    },
    {
        icon: <FaWikipediaW />,
        title: "Wikipedia Management",
        description: "Enhance your online presence with professional Wikipedia page creation and management, boosting credibility and visibility."
    },
    {
        icon: <MdWeb />,
        title: "Website Development",
        description: "Develop an engaging and user-friendly website that serves as the cornerstone of your online presence. Level up the user experience with our expertise.",
    },
    {
        icon: <FaMobile />,
        title: "Appication and Software Development",
        description: "Innovate with custom applications and software solutions tailored to your unique needs. Our experts are well-versed in the latest technologies."
    },
    {
        icon: <FaVideo />,
        title: "Videos",
        description: "Harness the power of video content to tell your story and engage audiences visually. Our video production services are second to none."
    },
    {
        icon: <MdOutlineEventSeat />,
        title: "Event Management",
        description: "Plan and execute successful events that leave a lasting impression on attendees. Our event management services are designed to deliver excellence."
    },
    {
        icon: <FaTwitter />,
        title: "Twitter Trend Management",
        description: "Lead conversations and trends on Twitter, leveraging the platform's influence. Our Twitter trend management services are designed to boost your visibility."
    }
]

const team = [
    {
        img: "/team/vansh.jpg",
        name: "Vansh Tyagi",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/vansh-tyagi-a04355210/"
    },
    {
        img: "/team/umang.jpg",
        name: "Umang Gupta",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/"
    },
    {
        img: "/team/vanshika.jpg",
        name: "Vanshika Gupta",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/vanshika-gupta23052003/"
    },
    {
        img: "/team/tanishk.jpg",
        name: "Tanishk Attri",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/tanishk-attri-a49027220/"
    },
    {
        img: "/team/tanishka.jpg",
        name: "Tanishka Garg",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/tanishka-garg-21885622a"
    },

    {
        img: "/team/pranav.jpeg",
        name: "Pranav Tripathi",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/tripathipranav14/"
    },
    {
        img: "/team/sushant.jpeg",
        name: "Sushant Sharma",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/sushant2021cs101/"
    },
    {
        img: "/team/shaily.jpg",
        name: "Shaily Bhati",
        position: "Team Member",
        linkedin: "https://www.linkedin.com/in/shaily-bhati-8b875524b"
    },
    {
        img: "/team/akshay.jpg",
        name: "Akshay Kumar Sharma",
        position: "DevRel",
        linkedin: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager/"
    }
    // {
    //     img: user,
    //     name: "Tushar Aggarwal",
    //     position: "Team Member"
    // },
]

const About = () => {
    return (
        <>
            <Head>
                <title>About | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="bg-blue-200 p-3 rounded-lg my-3">
                    <h1 className="title text-black text-center">About Us</h1>
                    <div className="flex flex-col items-center md:flex-row justify-center">
                        <div className={`w-full md:w-1/2 ${montserrat.className}`}>
                            <p className="w-full text-black">
                                Welcome to <strong>Campaigning Source</strong>, your ultimate destination for comprehensive
                                business development and election promotion solutions. Our mission is to propel businesses
                                to unprecedented heights and guide politicians to claim the chair of leadership. With a rich
                                history of transforming aspirations into achievements, Campaigning Source stands as a beacon
                                of success in the industry.
                            </p>
                        </div>
                        <div className="mx-auto">
                            <Image src="/about/tiranga.png" alt="indian-flag" className="rounded-md" width={500} height={200}/>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-200 p-3 rounded-lg my-3">
                    <h2 className="title text-black text-center">History</h2>
                    <div className="flex flex-col items-center md:flex-row justify-center">
                        <div className="mx-auto">
                            <Image src="/about/tiranga.png" alt="indian-flag" className="rounded-md" width={500} height={200}/>
                        </div>
                        <div className={`w-full md:w-1/2 ${montserrat.className}`}>
                            <p className="w-full text-black">
                                <strong>Campaigning Source</strong> embarked on its journey with a singular vision: to bridge the
                                gap between potential and success. Over time, we've evolved into a powerhouse of expertise, catering
                                not only to business growth but also to effective election campaigns. Our experience is a testament
                                to our adaptability and proficiency in driving results in these interconnected domains.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="outline p-3 rounded-lg text-black">
                    <h2 className="title text-black text-center">Our Services</h2>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-around bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-lg m-1 w-full md:w-1/4 h-auto md:h-72 text-center hover:scale-105 transition ease-in-out duration-200"
                            >
                                <span className="text-4xl my-2">{service.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-center font-thin">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="bg-blue-200 p-3 rounded-lg my-3">
                    <h2 className="title text-black text-center">Social Proof</h2>
                    <div className="flex flex-col items-center md:flex-row justify-center">
                        <div className="mx-auto">
                            <Image src="/about/tiranga.png" alt="indian-flag" className="rounded-md" width={500} height={200}/>
                        </div>
                        <div className={`w-full md:w-1/2 ${montserrat.className}`}>
                            <p className="w-full text-black">
                                <strong>Campaigning Source's</strong> legacy is built on a foundation of successful collaborations
                                and delighted clients. From small enterprises witnessing exponential growth to political leaders
                                securing resounding victories, our impact speaks volumes. Our proven expertise in business development
                                and election promotion stands as a testament to our unwavering commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-200 p-3 rounded-lg my-3">
                    <h2 className="title text-black text-center">Join us in crafting success.</h2>
                    <div className="flex flex-col items-center md:flex-row justify-center">
                        <div className={`w-full md:w-1/2 ${montserrat.className}`}>
                            <p className="w-full text-black">
                                <strong>Campaigning Source's</strong> legacy is built on a foundation of successful collaborations and
                                delighted clients. From small enterprises witnessing exponential growth to political leaders securing
                                resounding victories, our impact speaks volumes. Our proven expertise in business development and election
                                promotion stands as a testament to our unwavering commitment to excellence.
                            </p>
                        </div>
                        <div className="mx-auto">
                            <Image src="/about/tiranga.png" alt="indian-flag" className="rounded-md" width={500} height={200}/>
                        </div>
                    </div>
                </div>

                <div className="outline p-3 rounded-lg mb-3">
                    <h2 className="title text-black text-center">Our Team</h2>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-around bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-lg m-1 w-full md:w-1/4 h-56 text-center hover:scale-105 transition ease-in-out duration-200"
                            >
                                <div className="relative overflow-hidden transition duration-300 transform rounded-full lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <Image
                                        src={member.img}
                                        alt="member"
                                        className="rounded-full"
                                        width={120}
                                        height={120}
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center px-5 py-4 transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <Link href={member.linkedin} target="_blank" className="text-white hover:text-blue-600 text-3xl">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                                <p className="text-center font-thin text-black">{member.position}</p>

                            </div>
                        ))}
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default About;
