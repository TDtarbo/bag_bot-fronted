import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ setChatBegin, setMessages }) => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const input = inputRef.current;
    const text = input.innerText.trim();
    if (!text) return;

    input.innerText = "";
    setChatBegin(true);
    setMessages((prev) => [...prev, { role: "user", text }]);
  };

  return (
    <div className="flex items-start justify-center h-[10vh] w-full bg-linear-to-b from-white/0 to-white">
      <div className="flex items-center gap-2 w-[30vw] fixed bottom-12 bg-white rounded-full p-1 border border-(--text-main)">
        <div
          ref={inputRef}
          className="flex-1 min-h-6 max-h-[100px] px-4 py-2 rounded-2xl overflow-y-auto outline-none text-base leading-[1.3rem] content-editable"
          contentEditable
          data-placeholder="Type Something..."
          onKeyDown={handleKeyDown}
          spellCheck={false}
        ></div>
        <button
          className="w-10 h-10 rounded-full flex justify-center items-center bg-(--text-main) text-white cursor-pointer border-none"
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <style>
        {`
          .content-editable:empty::before {
            content: attr(data-placeholder);
            color: gray;
            pointer-events: none;
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default InputField;
