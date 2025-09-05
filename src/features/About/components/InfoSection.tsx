import type { IAboutItems } from "../../../interfaces/IAboutItems";
import styles from "../about.module.css";
import AboutTags from "./AboutTags";

const InfoSection: React.FunctionComponent<IAboutItems> = ({
  subtitle,
  labels,
}) => {
  return (
    <section className={styles.items_container}>
      <p className={styles.subtitle}>{subtitle}</p>
      <AboutTags tags={labels} />
    </section>
  );
};

export default InfoSection;
