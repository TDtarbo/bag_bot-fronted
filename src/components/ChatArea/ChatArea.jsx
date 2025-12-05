import BotBubble from "../BotBubble/BotBubble";
import CustomerBubble from "../CustomerBubble/CustomerBubble";
import styles from "./ChatArea.module.css";

const ChatArea = ({ thinking , messages }) => {
    
  return (
      <div className={styles.chatArea}>
        {messages.map((message) =>
          message.type === "user" ? (
            <CustomerBubble key={message.id} text={message.text} />
          ) : (
            <BotBubble key={message.id} text={message.text} />
          )
        )}
        {thinking && <BotBubble thinking={true} />}
      </div>
  );
};

export default ChatArea;
