import Hero from "../components/Hero";
import InputField from "../components/InputField";
import ChatArea from "../components/ChatArea";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cleanText = (text) => {
    return text
        .replace(/\n+/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim();
};

const ChatPage = () => {
    const [chatBegin, setChatBegin] = useState(false);
    const [thinking, setThinking] = useState(false);

    const chatAreaRef = useRef(null);

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if(thinking) return;
        setThinking(true);

        console.log(messages);

        const handleNewMessage = async () => {
            if (!messages.length || messages[messages.length - 1]?.role === "ai") {
                setThinking(false);
                return;
            }

            const cleanedMessages = messages.map((message) => {
                if (message.role === "ai") {
                    return {
                        ...message,
                        text: cleanText(message.text),
                    };
                } else {
                    return message;
                }
            });

            try {
                const response = await fetch("http://localhost:3000/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ messages: cleanedMessages }),
                });

                if (!response.body) return;

                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;

                    const text = decoder.decode(value);
                    const lines = text.split("\n");

                    const parsedLines = lines
                        .map((line) => line.replace(/^data: /, ""))
                        .filter((line) => line !== "" && line !== "[DONE]")
                        .map((line) => JSON.parse(line));

                    if (parsedLines.length == 0) {
                        console.log("Done");
                    }

                    
                    for (const parsedLine of parsedLines) {
                      console.log(parsedLine);
                        setMessages((prev) => {
                            setThinking(false);
                            const lastMessage = prev[prev.length - 1];

                            if (lastMessage.role === "ai") {
                                const updatedLastMessage = {
                                    ...lastMessage,
                                    text: lastMessage.text + parsedLine,
                                };
                                return [...prev.slice(0, -1), updatedLastMessage];
                            } else {
                                return [...prev, { role: "ai", text: parsedLine }];
                            }
                        });
                    }
                }
            } catch (error) {
                console.error("Stream error:", error);
            }

            setThinking(false);
        };

        handleNewMessage();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center bg-white">
            <div className="flex w-full h-[calc(90vh-4rem)] justify-center items-center bg-white overflow-y-scroll animatedContainer">
                <AnimatePresence mode="wait">
                    {!chatBegin ? (
                        <motion.div
                            key="hero"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Hero setMessages={setMessages} setChatBegin={setChatBegin} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chatArea"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
                            <button
                                onClick={() => {
                                    setChatBegin(false);
                                    setMessages([]);
                                }}
                                className="absolute top-4 left-4 bg-(--text-main) text-white px-4 py-2 rounded-full border-none cursor-pointer"
                            >
                                Clear chat
                            </button>

                            <button
                                onClick={() => {
                                    setChatBegin(false);
                                }}
                                className="absolute top-18 left-4 bg-(--text-main) text-white px-4 py-2 rounded-full border-none cursor-pointer"
                            >
                                Show Suggestions
                            </button>

                            <div
                                ref={chatAreaRef}
                                className="w-full h-full overflow-y-scroll flex justify-center items-start pt-10 animatedContainer"
                            >
                                <ChatArea
                                    messages={messages}
                                    thinking={thinking}
                                    scrollToBottom={scrollToBottom}
                                    setChatBegin={setChatBegin}
                                    setMessages={setMessages}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <InputField setChatBegin={setChatBegin} setMessages={setMessages} messages={messages} />
            <style>
                {`
          .animatedContainer::-webkit-scrollbar {
            width: 5px;
          }

          .animatedContainer::-webkit-scrollbar-track {
            background: transparent;
          }

          .animatedContainer::-webkit-scrollbar-thumb {
            background: var(--text-light);
            border-radius: 4px;
          }
        `}
            </style>
        </div>
    );
};

export default ChatPage;
