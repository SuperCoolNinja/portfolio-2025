import type { IButton } from "../../interfaces/IButton";
import styles from "./button.module.css";

const Button: React.FunctionComponent<IButton> = ({
  selected,
  setSelected,
  label,
}) => {
  const handleSelected = () => {
    setSelected(label);
  };

  const isActive = selected === label;

  return (
    <div
      onClick={handleSelected}
      className={`${styles.btn} ${isActive ? styles.selected : ""}`}
    >
      {label}
    </div>
  );
};

export default Button;
