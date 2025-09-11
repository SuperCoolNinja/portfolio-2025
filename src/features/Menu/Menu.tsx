import { useEffect, useRef, useCallback } from "react";
import type { MenuProps } from "../../interfaces/IMenuProps";
import styles from "./menu.module.css";

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  selected,
  onSelect,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const selectedRef = useRef<HTMLLIElement | null>(null);

  const updateHighlight = useCallback(() => {
    if (selectedRef.current && listRef.current && highlightRef.current) {
      const rect = selectedRef.current.getBoundingClientRect();
      const parentRect = listRef.current.getBoundingClientRect();

      highlightRef.current.style.width = `${rect.width}px`;
      highlightRef.current.style.left = `${rect.left - parentRect.left}px`;
    }
  }, []);

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => {
      window.removeEventListener("resize", updateHighlight);
    };
  }, [updateHighlight, selected]);

  return (
    <ul className={styles.list} ref={listRef}>
      {items.map((v) => {
        const isSelected = v === selected;
        return (
          <li
            key={v}
            ref={isSelected ? selectedRef : null}
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
