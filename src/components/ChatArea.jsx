import { useEffect } from "react";
import BotBubble from "./BotBubble";
import CustomerBubble from "./CustomerBubble";
import { motion } from "framer-motion";

const ChatArea = ({ thinking, messages, scrollToBottom }) => {
  useEffect(() => {
    scrollToBottom();
  }, [thinking, messages]);

  return (
    <div
      className={`flex flex-col gap-8 w-[30vw] pr-2.5 scrollbar-gutter-stable pb-10`}
    >
      {messages.map((message, index) =>
        message.role === "user" ? (
          <CustomerBubble key={index} text={message.text} />
        ) : (
          <BotBubble key={index} text={message.text} />
        )
      )}
      {thinking && (
        <div className="bg-white border rounded-[2rem_2rem_2rem_0] px-4 py-2 self-start max-w-[80%] flex items-center">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-(--text-main) rounded-full"
                animate={{ y: ["0%", "-50%", "0%"] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatType: "loop",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatArea;
