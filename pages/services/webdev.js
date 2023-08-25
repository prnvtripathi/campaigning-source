import Link from "next/link";
import { FaGithub } from "react-icons/fa"; import Head from 'next/head';
import Layout from '@/components/Layout';
import user from '@/assets/user.png'
import Image from "next/image";

const TeamData = [
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
    {
        img: user,
        name: "John Doi",
    },
];

const WebDev = () => {
    return (
        <>
            <Head>
                <title>Web Development | Campaigning Source</title>
            </Head>
            <Layout>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl'>Web Development</h1>
                    <div className="flex flex-wrap gap-2 p-8 justify-center items-center">
                        {TeamData &&
                            TeamData.map((data, index) => (
                                <div key={index} className="flex flex-col p-4 md:w-72 w-72 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <Image
                                            alt="content"
                                            width={500}
                                            height={500}
                                            className="object-cover object-center h-full w-full rounded-full border-8 border-[#AF7AF2]"
                                            src={data.img}
                                        />
                                    </div>
                                    <div className="text-center rounded-md bg-emerald-500 -mt-2">
                                        <h2 className="text-2xl text-white font-bold">
                                            {data.name}
                                        </h2>
                                        <div className="flex justify-center items-center gap-2 text-lg">
                                            <Link href="/">
                                                Portfolio
                                            </Link>
                                            <Link href="/">
                                                <FaGithub />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default WebDev;