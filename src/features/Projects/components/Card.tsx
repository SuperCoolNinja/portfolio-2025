import React from "react";
import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";

const CardItem: React.FC<{ project: IProjectsData }> = ({ project }) => {
  return (
    <div className={styles.card_container}>
      <img src={project.image} alt={project.name} className={styles.img} />
      <div className={styles.wrapper_card}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
