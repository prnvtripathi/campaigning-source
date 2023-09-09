import Link from "next/link"
import { AiOutlineLike, AiOutlineUser, AiOutlineEye, AiOutlineShareAlt, AiOutlineYoutube } from "react-icons/ai"

const SocialMedia = () => {
    return (
        <div className="mx-2 flex p-4 items-center justify-between bg-blue-600 rounded-lg text-white">
            <h2 className="text-md md:text-3xl font-bold">Elevate your social game, boost now!</h2>
            <ul className='flex flex-wrap justify-around items-center gap-2 py-1 px-4 rounded-md font-semibold text-secondaryText'>
                <li className='bg-blue-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/'><AiOutlineLike />Likes</Link>
                </li>
                <li className='bg-gray-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/'><AiOutlineUser />Followers</Link>
                </li>
                <li className='bg-green-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/'><AiOutlineEye />Views</Link>
                </li>
                <li className='bg-yellow-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/'><AiOutlineShareAlt />Shares</Link>
                </li>
                <li className='bg-red-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/'><AiOutlineYoutube />Subscribers</Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia