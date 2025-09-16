import styles from "../project.module.css";
import {
  IconParkPreviewOpen,
  LogosGithubIcon,
} from "../../../components/Logos/Logos";

const BottomCardIcons: React.FunctionComponent<{
  demo?: string;
  source_code?: string;
}> = ({ demo, source_code }) => {
  return (
    <section className={styles.card_icons_container}>
      {demo && (
        <a
          className={styles.icon}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconParkPreviewOpen />
        </a>
      )}

      {source_code && (
        <a
          className={styles.icon}
          href={source_code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogosGithubIcon />
        </a>
      )}
    </section>
  );
};

export default BottomCardIcons;
