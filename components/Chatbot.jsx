// import { useState, useRef, useEffect } from 'react';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { MdClose } from 'react-icons/md';

// const Chatbot = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const response = "Growing your catering business from generating a revenue of 1 lakh per month to 10 lakh per month is an ambitious goal. To achieve this, you'll need to implement a strategic plan that focuses on expanding your customer base, increasing sales, and optimizing operations. Here are some strategies to consider: 1. Diversify Your Services: Offer a diverse range of catering services, such as catering for weddings, corporate events, private parties, and more. Consider expanding into related areas like event planning, meal prep services, or food delivery. 2. Marketing and Promotion: Invest in marketing and advertising to reach a wider audience. Use both online and offline channels. Create a professional website, engage in social media marketing, and use search engine optimization (SEO) to increase online visibility. Develop a referral program to encourage existing clients to refer your services to others. 3. Strategic Pricing: Review your pricing strategy. Ensure that your prices reflect the quality of your services and are competitive within your market. Consider tiered pricing options for different client needs and budgets. 4. Customer Relationship Management: Build strong relationships with your existing clients to secure repeat business and referrals. Implement a customer relationship management (CRM) system to keep track of client preferences and feedback. 5. Quality and Innovation: Maintain high-quality standards in food preparation, presentation, and service. Innovate with new menu items, themes, or special offerings to attract and retain clients. 6. Streamline Operations: Optimize your kitchen and operational processes to increase efficiency and reduce costs. Invest in technology for order management, inventory control, and staff scheduling. 7. Staffing and Training: Hire and train additional staff to handle higher volumes of orders. Ensure that your team is well-trained in food safety, customer service, and catering best practices. 8. Expand Geographic Reach: Consider expanding your service area to reach a wider audience. Partner with event venues, wedding planners, and corporate event organizers in new locations. 9. Customer Feedback and Adaptation: Gather feedback from customers and adapt your services based on their preferences and suggestions. Stay up-to-date with food trends and dietary requirements. 10. Investment in Marketing Analytics: Use marketing analytics tools to measure the effectiveness of your marketing campaigns. Analyze customer behavior and preferences to refine your marketing strategies. 11. Financial Planning: Develop a detailed financial plan to track your revenue, expenses, and profitability. Be prepared to reinvest profits into the business for growth. 12. Partnerships: Collaborate with complementary businesses, such as florists, event venues, or event planners, to cross-promote services. 13. Scaling Gradually: Plan for incremental growth. Scaling too quickly can strain resources and quality. Monitor key performance indicators (KPIs) and adjust your strategy as needed. Remember that scaling a business requires careful planning, investment, and ongoing effort. It's essential to adapt and refine your strategy as you grow to ensure long-term success. Additionally, seeking advice from mentors or industry experts can provide valuable insights as you work toward your revenue goal."

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleChatToggle = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   const chatContainerRef = useRef(null);
//   useEffect(() => {
//     // Scroll to the bottom of the chat container when chatHistory changes
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   const handleSendMessage = () => {
//     if (inputValue.trim() !== '') {
//       // Set user's message
//       const updatedChatHistory = [...chatHistory, { type: 'user', message: inputValue }];
//       setChatHistory(updatedChatHistory);

//       setTimeout(() => {
//         const botResponse = getChatbotResponse(inputValue);
//         setChatHistory([...updatedChatHistory, { type: 'bot', message: botResponse }]);
//       }, 1250);
//       setInputValue('');
//     }
//   };



//   const getChatbotResponse = (question) => {
//     if (question.toLowerCase().includes('looking for strategies to increase')) {
//       return response;
//     } else if (question.toLowerCase().includes('gpt based chat bot repo') || question.toLowerCase().includes('gpt based chatbot repo')) {
//       const repoLink = "https://berack-ai.vercel.app/";
//       return (
//         <div>
//           here:{" "}
//           <a className='underline' href={repoLink} target="_blank" rel="noopener noreferrer">
//             {repoLink}
//           </a>
//         </div>
//       );
//     } else if (question.toLowerCase().includes('hello') || question.toLowerCase().includes('hi')) {
//       return 'Hello! How can I help you?';
//     } else if (question.toLowerCase().includes('how are you')) {
//       return 'I am good. How are you?';
//     } else if (question.toLowerCase().includes('good')) {
//       return 'That is great!';
//     } else if (question.toLowerCase().includes('bad')) {
//       return 'I am sorry to hear that. How can I help you?';
//     } else if (question.toLowerCase().includes('help')) {
//       return 'I can help you with your queries related to your business.';
//     } else if (question.toLowerCase().includes('thank')) {
//       return 'You are welcome!';
//     } else if (question.toLowerCase().includes('bye')) {
//       return 'Bye! Have a nice day.';
//     } else {
//       return 'Sorry, I did not understand that.';
//     }
//   };


//   return (
//     <div className={`fixed bottom-8 right-8 ${isChatOpen ? 'w-1/2' : 'w-10'}`}>
//       <div
//         className={`bg-yellow-400 text-black p-3 rounded cursor-pointer`}
//         onClick={handleChatToggle}
//       >
//         {isChatOpen ? (<MdClose />) : (<FaPhoneAlt />)}
//       </div>
//       {isChatOpen && (
//         <div className="bg-white p-4 rounded-b-lg border-t border-blue-500">
//           <div
//             ref={chatContainerRef}
//             className='max-h-60 overflow-y-scroll'
//           >
//             {chatHistory.map((chat, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 text-black bg-blue-100 p-2 rounded w-fit shadow-xl ${chat.type === 'user' ? 'ml-auto' : ''}`}
//               >
//                 {chat.type === 'user' ? (
//                   <span className="font-bold">You:</span>
//                 ) : (
//                   <span className="font-bold">Bot:</span>
//                 )}{' '}
//                 {chat.message}
//               </div>
//             ))}
//           </div>
//           <div className="mt-2 flex">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               onKeyDown={handleKeyDown} // Handle Enter key press
//               className="flex-grow border p-2 rounded-l-md"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-500 text-white p-2 rounded-r-md"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
   const handleWhatsappClick = () => {
    window.open('https://wa.link/3ik1jc', '_blank');
};

    return (
        <div
            className="fixed z-10 bottom-8 right-6 w-12 h-12 rounded-full bg-green-500 flex justify-center items-center cursor-pointer shadow-md hover:scale-95 hover:bg-green-600 transition"
            onClick={handleWhatsappClick}
        >
            <FaWhatsapp className="text-white text-3xl" />
        </div>
    );
};

export default WhatsappButton;
