import styles from "./card.module.css";
import type { CSSProperties, ReactNode } from "react";

const Card: React.FunctionComponent<{
  children: ReactNode;
  style?: CSSProperties;
}> = ({ children, style }) => {
  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
