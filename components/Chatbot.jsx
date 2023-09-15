import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Chatbot = () => {

    const url = "https://webchat.botframework.com/embed/ChatbotJabal-bot/gemini?b=ChatbotJabal-bot&s=qrXJvC7ZM9s.r6pPUeq0bRiBLw7hEbgU-E55IzwNmS-9yiVZIj03xnA&username=You"

    return (
        <Link href={url} target="_blank">
            <div className="fixed bottom-12 right-12 z-50 bg-yellow-400 p-3 text-black text-xl rounded-full transition hover:scale-125">
                <FaPhoneAlt />
            </div>
        </Link>
    )
}

export default Chatbot