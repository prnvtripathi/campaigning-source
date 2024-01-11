import { Montserrat } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const customers = [
    {
        id: 1,
        img: "/pastCustomers/aastha.png",
    },
    {
        id: 2,
        img: "/pastCustomers/fabnic.png",
    },
    {
        id: 3,
        img: "/pastCustomers/saviralFoods.png",
    },
    {
        id: 4,
        img: "/pastCustomers/daankaro.png",
    },
    {
        id: 5,
        img: "/pastCustomers/aap.png",
    },
    {
        id: 6,
        img: "/pastCustomers/bjp.png",
    },
    {
        id: 7,
        img: "/pastCustomers/inc.png",
    },
    {
        id: 8,
        img: "/pastCustomers/rjd.png",
    },
    {
        id: 9,
        img: "/pastCustomers/MCIP.webp",
    },
    {
        id: 10,
        img: "/pastCustomers/shopify.png",
    }
]

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700]
})

const PastCustomers = () => {
    return (
        <div className="text-center bg-bg rounded-md py-2 my-3 md:w-11/12 mx-auto">
            <hr className="mt-2 border-primaryText"/>
            <h1 className="text-4xl font-bold py-3"><span className={montserrat.className}>Our Collaborations</span></h1>
            <Marquee className="flex" gradient={true} gradientColor="#242424" gradientWidth={30} speed={50}>
                {customers.map((customer) => (
                    <div key={customer.id} className="saturate-50">
                        <Image src={customer.img} alt="customer" className="w-32 mr-3" width={500} height={500} />
                    </div>
                ))}
            </Marquee>
            <hr className="mt-2 border-primaryText"/>
        </div>
    );
}

export default PastCustomers;
