import type { MenuProps } from "../../interfaces/IMenuProps";
import styles from "./menu.module.css";

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  selected,
  onSelect,
}) => {
  return (
    <ul className={styles.list}>
      {items.map((v) => {
        const isSelected = v === selected;
        return (
          <li
            key={v}
            className={`${styles.item} ${isSelected ? styles.selected : ""}`}
            onClick={() => onSelect(v)}
          >
            {v}
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
