import styles from "./CustomerBubble.module.css";

const CustomerBubble = ({ text }) => {
  return (
    <p className={styles.customerBubble}>{text}</p>
  );
};

export default CustomerBubble;
