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
        <div className="text-center bg-white rounded-md py-2 my-3 outline">
            <h1 className="title py-3"><span className={montserrat.className}>Our Collaborations</span></h1>
            <Marquee className="flex" pauseOnHover={true} gradient={true} gradientWidth={50} speed={75}>
                {customers.map((customer) => (
                    <div key={customer.id}>
                        <Image src={customer.img} alt="customer" className="w-40 mr-3" width={500} height={500} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export default PastCustomers;
