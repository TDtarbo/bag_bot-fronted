import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const BotBubble = ({ text }) => {
    console.log(JSON.stringify(text));

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border rounded-[2rem_2rem_2rem_0] px-4 py-2 self-start max-w-full"
        >
            <ReactMarkdown
                components={{
                    p: ({ children }) => <p className="text-gray-700 leading-relaxed">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
                    li: ({ children }) => <li className="ml-1 list-decimal">{children}</li>,
                    ol: ({ children }) => <ol className="list-decimal ml-1 mt-2 space-y-1">{children}</ol>,
                }}
            >
                {text}
            </ReactMarkdown>
        </motion.div>
    );
};

export default BotBubble;
