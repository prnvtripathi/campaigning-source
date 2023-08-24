import Link from "next/link"
import { AiOutlineLike, AiOutlineUser, AiOutlineEye, AiOutlineShareAlt, AiOutlineYoutube } from "react-icons/ai"

const SocialMedia = () => {
    return (
        <div className="mx-2 flex p-4 items-center justify-between bg-[#DAC0A3] rounded-lg">
            <h2 className="text-md md:text-3xl font-bold">Social Media Boost</h2>
            <ul className='flex flex-wrap justify-around items-center gap-2 py-1 px-4 rounded-md font-semibold text-secondaryText'>
                <li className='bg-blue-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='/'><AiOutlineLike />Likes</Link>
                </li>
                <li className='bg-gray-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='/'><AiOutlineUser />Followers</Link>
                </li>
                <li className='bg-green-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='/'><AiOutlineEye />Views</Link>
                </li>
                <li className='bg-yellow-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='/'><AiOutlineShareAlt />Shares</Link>
                </li>
                <li className='bg-red-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='/'><AiOutlineYoutube />Subscribers</Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia