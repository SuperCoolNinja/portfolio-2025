import styles from "../about.module.css";

const CardAboutMe: React.FunctionComponent<{ sentances: string[] }> = ({
  sentances,
}) => {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card}>
        <p className={styles.title}>About Me</p>
        {sentances.map((v, i) => (
          <p key={i} className={styles.content}>
            {v}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardAboutMe;
