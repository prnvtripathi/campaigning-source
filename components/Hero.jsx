export default function Component() {
    return (
        <main className="text-black bg-white dark:text-white dark:bg-black">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Welcome to PoliBiz Solutions
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-light-blue-400">
                                Your one-stop solution for political promotion and business development. We help you navigate the
                                political landscape and grow your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-light-blue-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <img
                            alt="Political Promotion"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-light-blue-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Political Promotion
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make Your Voice Heard</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-light-blue-400">
                                    We provide strategic political promotion services to ensure your message reaches the right audience at
                                    the right time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <img
                            alt="Business Development"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-light-blue-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Business Development
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Grow Your Business</h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-light-blue-400">
                                    Our business development services are designed to help you expand your business, reach new markets,
                                    and increase your bottom line.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

