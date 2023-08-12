import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import { AiOutlineLike, AiOutlineUser, AiOutlineEye, AiOutlineShareAlt, AiOutlineYoutube } from "react-icons/ai"

const Home = () => {
  return (
    <>
    <Head>
      <title>Campaigning Source</title>
    </Head>
      <Layout>
        <div className='w-[75%] ml-auto mr-auto'>
          <div className="flex p-4 items-center justify-between">
            <h2 className="text-3xl">Social Media Boost</h2>
            <ul className='flex justify-around items-center gap-3 bg-gray-500 py-1 px-4 rounded-md'>
              <li className='bg-blue-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                <Link className='flex gap-1 items-center' href='/'><AiOutlineLike />Likes</Link>
              </li>
              <li className='bg-gray-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                <Link className='flex gap-1 items-center' href='/'><AiOutlineUser />Followers</Link>
              </li>
              <li className='bg-green-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                <Link className='flex gap-1 items-center' href='/'><AiOutlineEye />Views</Link>
              </li>
              <li className='bg-yellow-700 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                <Link className='flex gap-1 items-center' href='/'><AiOutlineShareAlt />Shares</Link>
              </li>
              <li className='bg-red-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                <Link className='flex gap-1 items-center' href='/'><AiOutlineYoutube />Subscribers</Link>
              </li>
            </ul>
          </div>

          <Hero />

        </div>
      </Layout>
    </>
  )
}


export default Home