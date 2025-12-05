import styles from "./Hero.module.css";

const suggestions = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit amet  adipisicing elit.",
  },
  {
    title: "Lorem ipsum dolor sit.",
  },
  {
    title: "amet consectetur adipisicing elit.",
  },
];

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} src="logo.png" alt="logo" />
      <h1 className={styles.title}>Welcome to BagBot</h1>
      <p className={styles.subtitle}>Your shopping assistant</p>
      <div className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <p className={styles.suggestion} key={index}>{suggestion.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Hero;
