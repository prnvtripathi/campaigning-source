// Importing necessary components and libraries
import Layout from "@/components/Layout";
import Head from "next/head";

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
        name: "Flags and Custom Printing",
        price: "Connect to our sales team"
    },
    {
        id: 8,
        name: "Camera and Drone Shooting",
        price: "Starting at ₹2500/day"
    },
    {
        id: 9,
        name: "Event Management",
        price: "Connect to our sales team"
    },
    {
        id: 10,
        name: "Social Media Handling",
        price: "Starting from ₹5000/month"
    },
    {
        id: 11,
        name: "Media PR and Articles",
        price: "Connect to our sales team"
    },
    {
        id: 12,
        name: "Twitter Trending",
        price: "As low as ₹15000/hashtag"
    },
    {
        id: 13,
        name: "Funnels and Ads Placement",
        price: "Strategise Now "
    },
    {
        id: 14,
        name: "Bulk Messages",
        price: "₹0.1/message"
    },
    {
        id: 15,
        name: "IVR and Bulk Calls",
        price: "₹0.13/product"
    },
    {
        id: 16,
        name: "Boost your Social Media",
        price: "Connect to our sales team"
    },
    {
        id: 17,
        name: "Press Conference",
        price: "Connect to our sales team"
    },
    {
        id: 18,
        name: "Wikipedia Management",
        price: "Connect to our sales team"
    },
    {
        id: 19,
        name: "Meta Advertisement",
        price: "Connect to our sales team"
    },
    {
        id: 20,
        name: "Google Ads",
        price: "Starting from ₹5,000/month"
    },
    {
        id: 21,
        name: "WhatsApp Broadcast",
        price: "Starting from ₹0.05/message"
    },
    {
        id: 22,
        name: "SMS Broadcast",
        price: "Starting from ₹0.1/message"
    },
    {
        id: 23,
        name: "IVR",
        price: "Starting from ₹2,000/month"
    },
    {
        id: 24,
        name: "Bulk Calling",
        price: "Starting from ₹0.2/call"
    },
    {
        id: 25,
        name: "Graphic Designing",
        price: "Starting from ₹1,999"
    },
    {
        id: 26,
        name: "SEO",
        price: "Starting from ₹7,999/month"
    },
    {
        id: 27,
        name: "SEM",
        price: "Starting from ₹9,999/month"
    },
    {
        id: 28,
        name: "Video Editing",
        price: "Starting from ₹1,499"
    },
    {
        id: 29,
        name: "Motion Graphics",
        price: "Starting from ₹2,499"
    },
    {
        id: 30,
        name: "Event Management",
        price: "Connect to our sales team"
    },
    {
        id: 31,
        name: "Affiliate Marketing",
        price: "Connect to our sales team"
    },
    {
        id: 32,
        name: "Customized Printing",
        price: "Connect to our sales team"
    },
    {
        id: 33,
        name: "Profile Management",
        price: "Starting from ₹3,999/month"
    },
    {
        id: 34,
        name: "Email Marketing",
        price: "Starting from ₹4,999/month"
    },
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
