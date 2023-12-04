// Importing necessary components and libraries
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

// Data array containing pricing information for various services
const data = [
    {
        id: 1,
        name: "Political and Election Promotion",
        price: "Connect to our sales team"
    },
    {
        id: 2,
        name: "Business Development",
        price: "Connect to our sales team"
    },
    {
        id: 3,
        name: "Web Development",
        price: "Starting from ₹9,999"
    },
    {
        id: 4,
        name: "App Development",
        price: "Starting From ₹14,999"
    },
    {
        id: 5,
        name: "Graphics",
        price: "₹1199 for 1 year"
    },
    {
        id: 6,
        name: "Videos and Reels",
        price: "Starting from ₹100"
    },
    {
        id: 7,
        name: "Camera and Drone Shooting",
        price: "Starting at ₹2500/day"
    },
    {
        id: 8,
        name: "Social Media Handling",
        price: "Starting from ₹5,000/month"
    },
    {
        id: 9,
        name: "Twitter Trending",
        price: "As low as ₹20,000/hashtag"
    },
    {
        id: 10,
        name: "Funnels and Ads Placement",
        price: "Strategise Now"
    },
    {
        id: 11,
        name: "Bulk Messages",
        price: "₹0.20/message"
    },
    {
        id: 12,
        name: "Wikipedia Management",
        price: "Connect to our sales team"
    },
    {
        id: 13,
        name: "Meta Advertisement",
        price: "Connect to our sales team"
    },
    {
        id: 14,
        name: "Google Ads",
        price: "Starting from ₹5,000/month"
    },
    {
        id: 15,
        name: "WhatsApp Broadcast",
        price: "Starting from ₹0.15/message"
    },
    {
        id: 16,
        name: "IVR",
        price: "Starting from ₹0.20/call"
    },
    {
        id: 17,
        name: "Bulk Calling",
        price: "Starting from ₹0.20/call"
    },
    {
        id: 18,
        name: "Graphic Designing",
        price: "Starting from ₹1,999/Month"
    },
    {
        id: 19,
        name: "SEO",
        price: "Starting from ₹6,999/month"
    },
    {
        id: 20,
        name: "SEM",
        price: "Starting from ₹6,999/month"
    },
    {
        id: 21,
        name: "Video Editing",
        price: "Starting from ₹300"
    },
    {
        id: 22,
        name: "Motion Graphics",
        price: "Starting from ₹500"
    },
    {
        id: 23,
        name: "Affiliate Marketing",
        price: "Connect to our sales team"
    },
    {
        id: 24,
        name: "Customized Printing",
        price: "Connect to our sales team"
    },
    {
        id: 25,
        name: "Profile Management",
        price: "Starting from ₹3,999/month"
    },
    {
        id: 26,
        name: "Email Marketing",
        price: "Starting from ₹4,999/month"
    },
    {
        id: 27,
        name: "YouTube Monetization",
        price: "Connect to our sales team"
    }
];

// Function to filter out unique services based on their names
const uniqueServices = Array.from(new Set(data.map((item) => item.name)))
    .map(name => {
        const service = data.find(item => item.name === name);
        return { id: service.id, name: service.name, price: service.price };
    });

// Pricing component rendering the pricing information
const Pricing = () => {
    return (
        <>
            <Head>
                <title>Pricing | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="pricing">
                    <h1 className="title text-black">Pricing</h1>
                    <div className="flex justify-center p-3 mb-3 text-black">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Pricing</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uniqueServices.map((item) => (
                                    <tr className="pricing-card" key={item.id}>
                                        <td className="pricing-card-title">{item.name}</td>
                                        <td className="pricing-card-price">{item.price}</td>
                                        <td className="pricing-card-button"><a href="tel:919811393288" className="hover:underline">Call Now</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Pricing;
