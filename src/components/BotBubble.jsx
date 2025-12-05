import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const BotBubble = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border rounded-[2rem_2rem_2rem_0] px-4 py-2 self-start max-w-full"
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </motion.div>
  );
};

export default BotBubble;
