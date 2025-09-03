import styles from "./about.module.css";

const Bio: React.FunctionComponent = () => {
  return (
    <>
      <h2 className={styles.name}>Samir Baatour</h2>
      <p className={styles.job}>Fullstack Developer</p>
    </>
  );
};

export default Bio;
