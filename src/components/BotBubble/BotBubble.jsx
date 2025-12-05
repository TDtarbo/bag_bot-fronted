import { useState, useEffect } from "react";
import styles from "./BotBubble.module.css";

const BotBubble = ({ text, thinking }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!thinking && text) {
      let index = 0;
      setDisplayedText("");
      const words = text.split(" ");
      const interval = setInterval(() => {
        setDisplayedText(prev => (prev ? prev + " " + words[index] : words[index]));
        index++;
        if (index >= words.length - 1) clearInterval(interval);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [thinking, text]);

  return (
    <p className={styles.botBubble}>
      {thinking ? "Thinking..." : displayedText}
    </p>
  );
};



export default BotBubble;
