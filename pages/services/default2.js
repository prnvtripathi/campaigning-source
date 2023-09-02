import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import webdev from '@/assets/services/webdev.png'
import appdev from '@/assets/services/appdev.png'
import Link from 'next/link'

const Default2 = () => {
    return (
        <>
            <Head>
                <title>Campaigning Source</title>
            </Head>
            <Layout>
                <div>
                    <h1 className="title">Software Development</h1>
                    <div className="flex gap-4 mb-6 p-4 rounded-md">
                        <div className="flex flex-col justify-around items-center bg-[#F6F1F1]">
                            <h2 className='sub-title'>Web Development</h2>
                            <Image src={webdev} alt="web development" width={360} height={360} className='mt-2 mb-3' />
                            <p className='text-md w-1/2 my-3'>
                                We build beautiful, responsive and feature-rich web based applications that solve real customer problems.
                            </p>
                            <Link href="/services/webdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                Learn more
                            </Link>
                        </div>
                        <div className="flex flex-col justify-around items-center bg-[#F6F1F1]">
                            <h2 className='sub-title'>App Development</h2>
                            <Image src={appdev} alt="app development" width={360} height={360} className='mt-2 mb-3' />
                            <p className='text-md w-1/2 my-3'>
                                We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.
                            </p>
                            <Link href="/services/appdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Default2