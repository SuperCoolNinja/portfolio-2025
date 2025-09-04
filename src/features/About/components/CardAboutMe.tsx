import styles from "../about.module.css";

const CardAboutMe: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card}>
        <p className={styles.title}>About Me</p>
        <p className={styles.content}>
          Fullstack developer from France, continuously learning and improving
          with ReactJS, NodeJS, and MongoDB.
        </p>
        <p className={styles.content}>
          Curious about video game development as well, with a growing interest
          in creating modern, ergonomic, and user-friendly UX/UI designs.
        </p>
      </div>
    </div>
  );
};

export default CardAboutMe;
