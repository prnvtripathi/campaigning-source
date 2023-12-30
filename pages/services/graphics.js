import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Contact from '@/components/Contact';
import Link from 'next/link';

// Graphics component
const Graphics = () => {
    const [b, setB] = useState(false);
    let imgSrc = b ? "/graphics/brochure.jpg" : "/graphics/brochure2.jpg";
    let imgSrc2 = b ? "/graphics/invite.jpg" : "/graphics/cards.jpg";

    useEffect(() => {
        const interval = setInterval(() => {
            setB(!b);
        }, 3000);
        return () => clearInterval(interval);
    }, [b]);

    return (
        <>
            <Head>
                <title>Graphics | Campaigning Source</title>
            </Head>
            <Layout>
                <h1 className="title text-black">Get graphics on demand!</h1>
                <div className='w-1/6 mb-3 mx-auto'>
                    <Link target='_blank' href="https://www.campaigningsource.com/contact" className='btn-primary'>
                        Let's go
                    </Link>
                </div>

                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src={imgSrc} onClick={() => setB(!b)} alt="brochure" width={500} height={400} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Get your business to new heights by getting our <strong>corporate brochure</strong>.<br />
                        Don't worry about the design, we will take care of it.<br />
                        Just tell us what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Wedding, Birthday, Anniversary, or any other event, we will make the best <strong>invitation card</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src={imgSrc2} onClick={() => setB(!b)} alt="brochure" width={500} height={400} className='rounded-md' />
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src="/graphics/hording.jpg" alt="hording" width={500} height={400} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Want to advertise on the highway? We will make the best <strong>hording</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Elections? We will make the best <strong>election posters</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src="/graphics/election.jpg" alt="election" width={500} height={400} className='rounded-md' />
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src="/graphics/product.jpg" onClick={() => setB(!b)} alt="product" width={500} height={400} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Want to sell your product? We will make the best <strong>product poster</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Design your <strong>food menu</strong>, get customers to your restaurant.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src="/graphics/food.jpg" alt="food" width={500} height={400} className='rounded-md' />
                </div>
                <div>
                    <Contact />
                </div>
            </Layout>
        </>
    );
};

export default Graphics;
