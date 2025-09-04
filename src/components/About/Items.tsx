import styles from "./about.module.css";
import type { ItemsProps } from "./types/items_type";

const Items: React.FunctionComponent<ItemsProps> = ({ subtitle, items }) => {
  return (
    <div className={styles.items_container}>
      <p className={styles.subtitle}>{subtitle}</p>
      <ul className={styles.items}>
        {items.map((v, i) => (
          <li className={styles.item} key={i}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
