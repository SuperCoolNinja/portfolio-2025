import Card from "../../../components/Card/Card";
import styles from "../about.module.css";

const CardAboutMe: React.FunctionComponent<{ sentances: string[] }> = ({
  sentances,
}) => {
  return (
    <div className={styles.wrapper_card}>
      <Card
        maxWidth="90rem"
        style={{
          color: "var(--text-light)",
          fontSize: "1.5rem",
          marginBottom: "1rem",
          padding: "2rem",
        }}
      >
        <p className={styles.title}>About Me</p>
        {sentances.map((v, i) => (
          <p key={i} className={styles.content}>
            {v}
          </p>
        ))}
      </Card>
    </div>
  );
};

export default CardAboutMe;
