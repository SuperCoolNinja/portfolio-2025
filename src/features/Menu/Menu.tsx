import { useEffect, useRef } from "react";
import type { MenuProps } from "../../interfaces/IMenuProps";
import styles from "./menu.module.css";

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  selected,
  onSelect,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  const updateHighlight = () => {
    const el = document.querySelector<HTMLLIElement>(
      `.${styles.item}.${styles.selected}`
    );
    if (el && listRef.current && highlightRef.current) {
      const rect = el.getBoundingClientRect();
      const parentRect = listRef.current.getBoundingClientRect();

      const extraWidth = 100 / 2;
      const totalWidth = rect.width + extraWidth;
      const offset = extraWidth / 2;

      highlightRef.current.style.width = `${totalWidth}px`;
      highlightRef.current.style.left = `${
        rect.left - parentRect.left - offset
      }px`;
    }
  };

  useEffect(() => {
    updateHighlight();

    window.addEventListener("resize", updateHighlight);
    return () => {
      window.removeEventListener("resize", updateHighlight);
    };
  }, [selected]);

  return (
    <ul className={styles.list} ref={listRef}>
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
      <span className={styles.highlight} ref={highlightRef}></span>
    </ul>
  );
};

export default Menu;
