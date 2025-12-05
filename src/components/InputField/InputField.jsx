import styles from "./InputField.module.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ setChatBegin, setMessages, setThinking }) => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const input = inputRef.current;
    const text = input.innerText.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: Date.now(), type: "user", text }]);

    input.innerText = "";

    setChatBegin(true);
    setThinking(true);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div
          ref={inputRef}
          className={styles.input}
          contentEditable
          placeholder="Type Something..."
          onKeyDown={handleKeyDown}
          spellCheck={false}
        ></div>
        <button className={styles.button} onClick={handleSubmit}>
          <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default InputField;
