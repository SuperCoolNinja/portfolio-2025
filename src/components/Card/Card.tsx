import React, { type CSSProperties } from "react";
import styles from "./card.module.css";

type CardProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  maxWidth?: string;
};

const Card: React.FC<CardProps> = ({ children, style, maxWidth }) => {
  return (
    <div
      className={styles.card}
      style={{
        borderRadius: "1.5rem",
        maxWidth: maxWidth ?? "50rem",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
