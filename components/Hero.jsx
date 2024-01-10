export default function Component() {
    return (
        <>
            <section className="w-full h-[38rem] py-12 md:py-24 lg:py-32 bg-bg flex justify-center items-center">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Welcome to Campaigning Source
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                                Your one-stop solution for political promotion and business development. We help you navigate the
                                political landscape and grow your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="md:w-1/2">
                        <img
                            alt="Political Promotion"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="/political.svg"
                            width="550"
                        />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-200">
                                    Political Promotion
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make Your Voice Heard</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                    We provide strategic political promotion services to ensure your message reaches the right audience at
                                    the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-200">
                                    Business Development
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Grow Your Business</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                    Our business development services are designed to help you expand your business, reach new markets,
                                    and increase your bottom line.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                alt="Business Development"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                height="310"
                                src="/business.svg"
                                width="400"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

