import React from "react";
import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import LazyImage from "../../../components/LazyImage/LazyImage";
import profileThumb from "../../../assets/load.jpg";
import StackList from "./StackList";
import TopCard from "./TopCard";
import BottomCardIcons from "./BottomCard";

const CardItem: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return (
    <div className={styles.card_container}>
      <LazyImage
        className={styles.img}
        src={project.image}
        placeholder={profileThumb}
        alt="Card Picture"
        width={200}
      />
      <div className={styles.wrapper_card}>
        <TopCard
          name={project.name}
          label={project.tag}
          color={project?.color}
          bg={project?.backgroundColor}
        />
        <p className={styles.description}>{project.description}</p>
        <StackList stacks={project.stacks} />
        <BottomCardIcons
          year={project.year}
          demo={project.demo}
          source_code={project.source_code}
        />
      </div>
    </div>
  );
};

export default CardItem;
