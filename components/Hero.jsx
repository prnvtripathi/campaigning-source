import politics from '@/assets/politics.png'
import graph from "@/assets/graph.png"
import website from "@/assets/website.png"
import messaging from "@/assets/messaging.png"
import social from "@/assets/social.png"

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700],
})

const Hero = () => {
    return (
        <>
            <div className="grid grid-rows-5 gap-2 p-2 md:grid-rows-3 md:grid-cols-5 mx-auto">
                <div className="md:row-span-2 md:col-span-2 p-1 flex flex-wrap justify-around items-center bg-[#EADBC8] md:text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}><h2 className="ml-3">Political Election Promotion</h2></span>
                    <Image src={politics} alt="politics" width={230} height={230} className='rounded-md' />
                    <Link href='/politics'>
                        <div className="bg-bg py-2 px-3 rounded-full text-secondaryText text-base font-normal hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-3 p-1 flex flex-wrap justify-around items-center bg-[#FFDBC3] md:text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}>Business<br /> Development</span>
                    <Image src={graph} alt="graph" width={190} height={190} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full text-secondaryText font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-3 p-1 flex flex-wrap justify-around items-center bg-[#FFDBC3] md:text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}><h2 className="ml-2">Prices and Offers</h2></span>
                    
                </div>
                <div className="md:col-span-5 p-1 flex flex-wrap justify-around items-center bg-[#DAC0A3] md:text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}><h2 className="ml-2">Website &<br />Application Development</h2></span>
                    <Image src={website} alt="website" width={175} height={175} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full text-secondaryText font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-3 p-1 flex flex-wrap justify-around items-center bg-[#DAC0A3] md:text-2xl font-bold rounded-lg">
                    <span className={montserrat.className}>
                        <ul className="ml-4">
                            <li className="list-disc">Graphic Designing</li>
                            <li className="list-disc">Advertisement</li>
                            <li className="list-disc">Social Media Management</li>
                            <li className="list-disc">Promotions</li>
                            <li className="list-disc">Video Editing</li>
                        </ul>
                    </span>
                    <Image src={social} alt="social" width={180} height={180} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full text-secondaryText font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-2 p-1 flex flex-wrap justify-around items-center bg-[#EADBC8] md:text-2xl font-bold rounded-lg">
                    <span className={montserrat.className}>
                        IVR, Bulk Voice Calls<br />
                        Broadcast SMS,<br />
                        Whatsapp Broadcast</span>
                    <Image src={messaging} alt="messaging" width={190} height={190} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full text-secondaryText mb-2 font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero