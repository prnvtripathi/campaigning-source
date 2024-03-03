import Link from 'next/link';

export default function AdBanner() {
    return (
        <div className="w-full py-1 text-center bg-primaryText/80 text-white">
            <p className='font-semibold font-sans'>
                ✨ Want to turn your idea into a startup? we'll help you here. {" "}
                <Link href="/company" className='underline text-black'>
                    coming soon
                </Link>
                ✨
            </p>
        </div>
    )
}