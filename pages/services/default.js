import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"

const data = [
    {
        id: 1,
        title: 'IVR',
        link: '/services/ivr',
    },
    {
        id: 2,
        title: 'Bulk SMS',
        link: '/services/bulksms',
    },
    {
        id: 3,
        title: 'Whatsapp Broadcast',
        link: '/services/whatsapp',
    },
    {
        id: 4,
        title: 'Bulk Voice Calls',
        link: '/services/bulkvoice',
    }
]

const Default = () => {
    return (
        <>
            <Head>
                <title>Campaigning Source</title>
            </Head>
            <Layout>
                <h1 className="title">Here are the services...</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 my-4">
                    {data.map((item) => (
                        <div key={item.id} className="bg-[#FFDBC3] p-3 rounded-lg flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <Link
                                className="bg-bg text-secondaryText my-2 px-3 py-1 font-light rounded-md transition duration-200 ease-in-out hover:rounded-none"
                                href={item.link}>
                                Let's go
                            </Link>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default Default