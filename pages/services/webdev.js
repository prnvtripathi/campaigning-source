import Link from "next/link";
import Head from 'next/head';
import Layout from '@/components/Layout';

const data = [
    {
        id: 1,
        title: 'Startup Website',
        desc: 'Building a startup let us handle the stress for you. We will build a website that will help you to grow your business.',
    },
    {
        id: 2,
        title: 'E-Commerce Website',
        desc: 'We will build a website for your business that will help you to grow your business.',
    },
    {
        id: 3,
        title: 'Personal Website',
        desc: 'We will build your personal website that will help you to grow your profile.',
    },
    {
        id: 4,
        title: 'Organisation Website',
        desc: 'We will build a website for your organisation that will help you to grow your organisation.',
    },
    {
        id: 5,
        title: 'Institution Website',
        desc: 'We will build a website for your institution that will help you to grow your institution.',
    },
    {
        id: 6,
        title: 'College Project',
        desc: 'We will build a website for your college project that will help you to grow your project.',
    }
]


const WebDev = () => {
    return (
        <>
            <Head>
                <title>Web Development | Campaigning Source</title>
            </Head>
            <Layout>
                <div className='flex flex-col justify-center items-center px-4'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Web Development</h1>
                    <div>
                        <Link href='/contact' className="btn-primary mb-3">Avail services</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {data.map((item) => (
                            <div key={item.id} className='flex flex-col justify-center items-center bg-[#F6F1F1] p-4 rounded-md my-4 w-full md:w-1/2 lg:w-1/3'>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mb-2'>{item.title}</h2>
                                <p className='text-sm md:text-md lg:text-lg w-full md:w-2/3 my-3'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link href='/contact' className="btn-primary mb-3">Avail services</Link>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default WebDev;
