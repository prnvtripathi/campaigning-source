import { Montserrat } from "next/font/google";
import aastha from "@/assets/pastCustomers/aastha.png"
import fabnic from "@/assets/pastCustomers/fabnic.png"
import daankaro from "@/assets/pastCustomers/daankaro.png"
import saviralFoods from "@/assets/pastCustomers/saviralFoods.png"
import aap from "@/assets/pastCustomers/aap.png"
import bjp from "@/assets/pastCustomers/bjp.png"
import inc from "@/assets/pastCustomers/inc.png"
import rjd from "@/assets/pastCustomers/rjd.png"
import Image from "next/image";

const customers = [
   {
        id: 1,
        img: aastha,
    },
    {
        id: 2,
        img: fabnic,
    },
    {
        id:3,
        img: saviralFoods,
    },
    {
        id: 4,
        img: daankaro,
    },
     {
        id: 5,
        img: aap,
    },
    {
        id: 6,
        img: bjp,
    },
    {
        id: 7,
        img: inc,
    },
    {
        id: 8,
        img: rjd,
    },
]

const montserrat = Montserrat({
    subsets: ['latin'],
    weights: [400, 500, 600, 700]
})

const PastCustomers = () => {
    return (
        <div className="text-center bg-white rounded-md py-2 my-3 outline">
            <h1 className="title py-3"><span className={montserrat.className}>Our Collaborations</span></h1>
            <div className="flex justify-evenly items-center py-3">
                {customers.map((customer) => (
                    <div key={customer.id}>
                        <Image src={customer.img} alt="customer" className="w-40" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PastCustomers;
