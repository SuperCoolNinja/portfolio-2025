import type { Dispatch, SetStateAction } from "react";
import styles from "./button.module.css";

export interface IButton {
  id: number;
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Button: React.FunctionComponent<IButton> = ({
  selected,
  setSelected,
  id,
  label,
}) => {
  const handleSelected = () => {
    setSelected(label);
  };

  const isActive = selected === label;

  return (
    <div
      onClick={handleSelected}
      key={id}
      className={`${styles.btn} ${isActive ? styles.selected : ""}`}
    >
      {label}
    </div>
  );
};

export default Button;
