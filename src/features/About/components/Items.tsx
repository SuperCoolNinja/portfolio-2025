import Tags from "../../../components/Tags/Tags";
import type { IAboutItems } from "../../../interfaces/IAboutItems";
import styles from "../about.module.css";

const Items: React.FunctionComponent<IAboutItems> = ({ subtitle, labels }) => {
  return (
    <div className={styles.items_container}>
      <p className={styles.subtitle}>{subtitle}</p>
      <Tags labels={labels} />
    </div>
  );
};

export default Items;
