import styles from "./ChatPage.module.css";
import Hero from "../../components/Hero/Hero";
import InputField from "../../components/InputField/InputField";
import ChatArea from "../../components/ChatArea/ChatArea";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatPage = () => {
  const [chatBegin, setChatBegin] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState([]);

  function getRandomMessage(minWords = 5, maxWords = 100) {
  const words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "Sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
    "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
    "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
  ];

  const length = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  let message = [];
  for (let i = 0; i < length; i++) {
    message.push(words[Math.floor(Math.random() * words.length)]);
  }
  return message.join(" ");
}

  useEffect(() => {
    if (chatBegin) {
      const timer = setTimeout(() => {
        setThinking(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [chatBegin]);

  useEffect(() => {
    if (thinking) {

      let text = getRandomMessage();

      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), type: "bot", text: text },
        ]);
        setThinking(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [thinking]);

  return (
    <div className={styles.chatPage}>
      <div className={styles.animatedContainer}>
        <AnimatePresence mode="wait">
          {!chatBegin ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>
          ) : (
            <motion.div
              key="chatArea"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ChatArea messages={messages} thinking={thinking} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InputField
        setChatBegin={setChatBegin}
        setMessages={setMessages}
        setThinking={setThinking}
      />
    </div>
  );
};

export default ChatPage;
