import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const response = "Growing your catering business from generating a revenue of 1 lakh per month to 10 lakh per month is an ambitious goal. To achieve this, you'll need to implement a strategic plan that focuses on expanding your customer base, increasing sales, and optimizing operations. Here are some strategies to consider: 1. Diversify Your Services: Offer a diverse range of catering services, such as catering for weddings, corporate events, private parties, and more. Consider expanding into related areas like event planning, meal prep services, or food delivery. 2. Marketing and Promotion: Invest in marketing and advertising to reach a wider audience. Use both online and offline channels. Create a professional website, engage in social media marketing, and use search engine optimization (SEO) to increase online visibility. Develop a referral program to encourage existing clients to refer your services to others. 3. Strategic Pricing: Review your pricing strategy. Ensure that your prices reflect the quality of your services and are competitive within your market. Consider tiered pricing options for different client needs and budgets. 4. Customer Relationship Management: Build strong relationships with your existing clients to secure repeat business and referrals. Implement a customer relationship management (CRM) system to keep track of client preferences and feedback. 5. Quality and Innovation: Maintain high-quality standards in food preparation, presentation, and service. Innovate with new menu items, themes, or special offerings to attract and retain clients. 6. Streamline Operations: Optimize your kitchen and operational processes to increase efficiency and reduce costs. Invest in technology for order management, inventory control, and staff scheduling. 7. Staffing and Training: Hire and train additional staff to handle higher volumes of orders. Ensure that your team is well-trained in food safety, customer service, and catering best practices. 8. Expand Geographic Reach: Consider expanding your service area to reach a wider audience. Partner with event venues, wedding planners, and corporate event organizers in new locations. 9. Customer Feedback and Adaptation: Gather feedback from customers and adapt your services based on their preferences and suggestions. Stay up-to-date with food trends and dietary requirements. 10. Investment in Marketing Analytics: Use marketing analytics tools to measure the effectiveness of your marketing campaigns. Analyze customer behavior and preferences to refine your marketing strategies. 11. Financial Planning: Develop a detailed financial plan to track your revenue, expenses, and profitability. Be prepared to reinvest profits into the business for growth. 12. Partnerships: Collaborate with complementary businesses, such as florists, event venues, or event planners, to cross-promote services. 13. Scaling Gradually: Plan for incremental growth. Scaling too quickly can strain resources and quality. Monitor key performance indicators (KPIs) and adjust your strategy as needed. Remember that scaling a business requires careful planning, investment, and ongoing effort. It's essential to adapt and refine your strategy as you grow to ensure long-term success. Additionally, seeking advice from mentors or industry experts can provide valuable insights as you work toward your revenue goal."

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      // Set user's message
      const updatedChatHistory = [...chatHistory, { type: 'user', message: inputValue }];
      setChatHistory(updatedChatHistory);
      // Assuming your chatbot logic is implemented here
      // Replace this with your actual chatbot logic
      const botResponse = getChatbotResponse(inputValue);
      // Append bot's response
      setChatHistory([...updatedChatHistory, { type: 'bot', message: botResponse }]);
      setInputValue('');
    }
  };



  const getChatbotResponse = (question) => {
    if (question.toLowerCase().includes('looking for strategies to increase')) {
      return response;
    } else if (question.toLowerCase().includes('gpt based chat bot repo')) {
      const repoLink = "https://berack-ai.vercel.app/";
      return (
        <div>
          You can use this:{" "}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            {repoLink}
          </a>
        </div>
      );
    } else {
      return (
        <div>
          I'm sorry, I didn't understand that question. Please ask something else.
        </div>
      );
    }
  };


  return (
    <div className={`fixed bottom-8 right-8 ${isChatOpen ? 'w-1/2' : 'w-10'}`}>
      <div
        className={`bg-yellow-400 text-black p-3 rounded cursor-pointer`}
        onClick={handleChatToggle}
      >
        {isChatOpen ? ("X") : (<FaPhoneAlt />)}
      </div>
      {isChatOpen && (
        <div className="bg-white p-4 rounded-b-lg border-t border-blue-500">
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-2 ${chat.type === 'user' ? 'float-right text-white bg-blue-700 p-2 rounded' : 'float-left bg-green-500 text-white p-2 rounded'
                  }`}
              >
                {chat.message}
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow border p-2 rounded-l-md"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
