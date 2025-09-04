import type { ITags } from "../../interfaces/ITags";
import styles from "./tags.module.css";

const Tags: React.FunctionComponent<ITags> = ({ labels }) => {
  return (
    <ul className={styles.items}>
      {labels.map((v, i) => (
        <li className={`${styles.item}`} key={i}>
          {v}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
