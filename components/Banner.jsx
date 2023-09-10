import { Montserrat, Satisfy } from "next/font/google"

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: ['400']
})

const satisfy = Satisfy({
    subsets: ['latin'],
    weight: ['400']
})

const Banner = () => {
    return (
        <div className="py-20 text-secondaryText text-center bg-opacity-90 bg-blue-800 rounded-md mb-2">
            <h1 className="text-6xl"><span className={montserrat.className}>Campaigning Source</span></h1>
            <p className="text-2xl py-5"><span className={satisfy.className}>Just like the Indian flag, get your business to the moon. 🌕</span></p>
        </div>
    )
}

export default Banner