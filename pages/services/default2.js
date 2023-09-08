import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import webdev from '@/assets/services/webdev.png'
import appdev from '@/assets/services/appdev.png'
import default2 from '@/assets/services/default2.png'
import Link from 'next/link'
import Banner from '@/components/Banner'

const Default2 = () => {
    return (
        <>
            <Head>
                <title>Campaigning Source</title>
            </Head>
            <Layout>
                <div>
                    <h1 className="title text-black">Software Development</h1>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-3 row-span-2'>
                            <Image src={default2} alt="default2" width={720} />
                        </div>
                        <div className='col-span-2'>
                            <div className="flex flex-col gap-4 mb-6 p-4 rounded-md">
                                <div className="flex flex-col justify-around items-center outline rounded-md">
                                    <h2 className='sub-title'>Web Development</h2>
                                    <div className='flex justify-around items-center'>
                                        <Image src={webdev} alt="web development" width={180} height={180} className='mt-2 mb-3' />
                                        <p className='text-md w-1/2 my-3 text-center'>
                                            We build beautiful, responsive and feature-rich web based applications that solve real customer problems.
                                        </p>
                                    </div>
                                    <Link href="/services/webdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                        Learn more
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-around items-center outline rounded-md">
                                    <h2 className='sub-title'>App Development</h2>
                                    <div className='flex justify-around items-center'>
                                        <Image src={appdev} alt="app development" width={180} height={180} className='mt-2 mb-3' />
                                        <p className='text-md w-1/2 my-3 text-center'>
                                            We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.
                                        </p>
                                    </div>
                                    <Link href="/services/appdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Banner />
                </div>
            </Layout>
        </>
    )
}

export default Default2