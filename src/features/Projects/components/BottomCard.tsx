import styles from "../project.module.css";
import {
  IconParkPreviewOpen,
  LogosGithubIcon,
} from "../../../components/Logos/Logos";

const BottomCardIcons: React.FunctionComponent<{
  year: string;
  demo?: string;
  source_code?: string;
}> = ({ year, demo, source_code }) => {
  return (
    <div className={styles.wrapper_icon_years}>
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

      <section>
        <p className={styles.year}>{year}</p>
      </section>
    </div>
  );
};

export default BottomCardIcons;
