import styles from "./about.module.css";

export type ItemsProps = {
  subtitle: string;
  items: string[];
};

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
