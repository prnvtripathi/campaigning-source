import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import data from "@/data/pricingData";

const Pricing = () => {
    return (
        <>
            <Head>
                <title>Pricing | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="py-8">
                    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="">
                            <div className="space-y-4">
                                {data.map((item, index) => (
                                    <div key={index} className="flex gap-12 flex-col md:flex-row">
                                        <div className="bg-gray-200 outline outline-4 p-4 rounded-lg shadow-md md:w-80 mx-auto h-fit text-center md:text-left">
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-gray-500">{item.description}</p>
                                        </div>
                                        <div className="w-full text-center overflow-x-auto rounded-xl">
                                            <table className="w-full table-auto bg-gray-200">
                                                <thead className="text-gray-800 uppercase text-xl">
                                                    <tr className="text-gray-800 bg-primaryText/90 border-b-2 border-gray-600">
                                                        <th className="px-2 py-3">Plan</th>
                                                        <th className="px-2 py-3">Description</th>
                                                        <th className="px-2 py-3">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-black text-lg">
                                                    {item.plans.map((plan, index) => (
                                                        <tr key={index} className="">
                                                            <td className="px-2 py-4 border-b-2 border-gray-300">{plan.title}</td>
                                                            <td className="px-2 py-4 border-b-2 border-gray-300">{plan.description}</td>
                                                            <td className="px-2 py-4 border-b-2 border-gray-300 text-xl font-bold text-primaryText">₹{plan.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <p className="text-gray-500">
                            <span className="text-primaryText">Note:</span> All the prices are exclusive of GST.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Pricing;
