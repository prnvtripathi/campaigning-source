import Link from "next/link"
import Head from "next/head"
import Layout from "@/components/Layout"
import services from "@/data/services"
import { useState } from "react"
import Banner from "@/components/Banner"
import GraphicsCarousel from "@/components/GraphicsCarousel"

export default function ServicePage({ service }) {

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const displayDescription =
        showFullDescription ? service.desc : service.desc.substring(0, 300);

    return (
        <>
            <Head>
                <title>{`${service.title} | Campaigning Source`}</title>
            </Head>
            <Layout>
                <main className="w-full">
                    <section className="md:w-11/12 mx-auto p-10 md:p-20">
                        <div className="px-4 md:px-6">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-wide md:text-5xl text-center md:text-left">{service.title}</h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-lg text-center md:text-left">
                                            {displayDescription}
                                            {service.desc.length > 300 && (
                                                <span onClick={toggleDescription} className="text-gray-300 text-xs">
                                                    {showFullDescription ? " Read less" : " ... Read more"}
                                                </span>
                                            )}
                                        </p>
                                        <div className="my-4">
                                            <Link
                                                className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="/contact"
                                            >
                                                Contact Sales
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    alt="Service Picture"
                                    src={service.image}
                                    className="w-full h-auto max-w-lg"
                                />
                            </div>
                        </div>
                    </section>

                    {service.example ? (
                        <section className="bg-gray-800 mb-12">
                            <h2 className="text-3xl font-bold tracking-wide md:text-5xl text-center py-3">Examples</h2>
                            <div className="py-2">
                            <GraphicsCarousel />
                            </div>
                        </section>
                    ) : null}
                    {service.why ?
                        (
                            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                                <div className="px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                        <div className="space-y-2 flex flex-col gap-3">
                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
                                            <p className="max-w-4xl text-gray-500">
                                                {service.why}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                        :
                        (
                            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                                <div className="px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
                                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                                We provide the best service in the industry. Our team is dedicated to ensuring customer satisfaction and
                                                we strive to exceed expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimonials</h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from our satisfied customers.
                                </p>
                            </div>
                            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-8">
                                <div className="p-4 border rounded shadow">
                                    <p>"This service is amazing! It has made my life so much easier."</p>
                                    <p>- Happy Customer</p>
                                </div>
                                <div className="p-4 border rounded shadow">
                                    <p>"I can't imagine going back to how things were before. This service is a game changer."</p>
                                    <p>- Satisfied User</p>
                                </div>
                                <div className="p-4 border rounded shadow">
                                    <p>"The team behind this service is fantastic. They've been so helpful and responsive."</p>
                                    <p>- Grateful Client</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Banner />
                    </section>
                </main>
            </Layout>
        </>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;

    // Find the service or return a 404 if not found
    const service = services.find((service) => service.key === id);

    if (!service) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            service,
        },
    };
}