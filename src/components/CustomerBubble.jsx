import { motion } from "framer-motion";

const CustomerBubble = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-(--text-main) border border-(--text-main) rounded-[2rem_2rem_0_2rem] text-white px-4 py-2 self-end max-w-[80%] wrap-break-word"
    >
      {text}
    </motion.div>
  );
};

export default CustomerBubble;
