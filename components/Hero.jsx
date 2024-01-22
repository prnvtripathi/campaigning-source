import BlurBox from "./BlurBox";
import { Satisfy } from "next/font/google";
import Image from "next/image";

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: ["400"],
})

export default function Component() {
    return (
        <>
        {/* <div className="w-1/4 absolute blur-3xl top-48">
            <Image src="/blob1.png" alt=" " width={500} height={500} />
        </div>
        <div className="w-1/5 absolute blur-2xl right-16 bottom-0">
            <Image src="/blob2.png" alt=" " width={500} height={500} />
        </div> */}
            <section className="w-full h-[42rem] py-12 md:py-24 lg:py-32 bg-bg flex justify-center items-center">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1>
                                <span className={`absolute text-white text-lg -rotate-45 -left-[34rem] right-0 ${satisfy.className}`}>Welcome to {` `}</span>
                                
                                <span className="text-3xl font-bold tracking-tighter sm:text-6xl">
                                    Campaigning Source
                                </span>

                            </h1>
                            <p className="text-xs mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                                Your one-stop solution for political promotion and business development. We help you navigate the
                                political landscape and grow your business.
                            </p>
                        </div>
                    </div>
                    <BlurBox />
                </div>
            </section>
            <section className="w-full py-6 md:py-12 lg:py-16 bg-slate-800">
                <div className="px-4 md:px-6 bg-gray-700 w-11/12 mx-auto p-16 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="md:w-1/2">
                            <img
                                alt="Political Promotion"
                                className="mx-auto aspect-video object-cover object-center sm:w-full lg:order-last"
                                src="/political.svg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-400 bg-opacity-70 px-3 py-1 text-sm text-gray-100">
                                    Political Promotion
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make Your Voice Heard</h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We provide strategic political promotion services to ensure your message reaches the right audience at
                                    the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-6 md:py-12 lg:py-16 bg-slate-800">
                <div className="px-4 md:px-6 bg-gray-700 w-11/12 mx-auto p-16 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-400 bg-opacity-70 px-3 py-1 text-sm text-gray-100">
                                    Business Development
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Grow Your Business</h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                    Our business development services are designed to help you expand your business, reach new markets,
                                    and increase your bottom line.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                alt="Business Development"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                src="/business.svg"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

