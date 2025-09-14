import React from "react";
import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import Tag from "../../../components/Tag/Tag";
import { Colors } from "../../../utils/colors";
import {
  IconParkPreviewOpen,
  LogosGithubIcon,
} from "../../../components/Logos/Logos";

const CardItem: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return (
    <div className={styles.card_container}>
      <img src={project.image} alt={project.name} className={styles.img} />
      <div className={styles.wrapper_card}>
        <div className={styles.wrapper_name_tag}>
          <h4 className={styles.name}>{project.name}</h4>
          <Tag
            style={{
              fontFamily: "system-ui",
              fontWeight: "600",
              padding: "0.3rem 0.7rem",
              backgroundColor: project.backgroundColor,
              color: project.color,
            }}
            label={project.tag}
          />
        </div>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.stack_list}>
          {project.stacks.map((v) => {
            return (
              <li key={v}>
                <Tag
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "600",
                    padding: "0.5rem 1rem",
                    color: Colors[v?.toUpperCase()]?.color ?? "",
                    backgroundColor:
                      Colors[v?.toUpperCase()]?.backgroundColor ?? "",
                  }}
                  label={v}
                />
              </li>
            );
          })}
        </ul>

        <section className={styles.card_icons_container}>
          {project?.demo && (
            <a
              className={styles.icon}
              href={project?.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconParkPreviewOpen />
            </a>
          )}

          {project?.source_code && (
            <a
              className={styles.icon}
              href={project?.source_code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogosGithubIcon />
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default CardItem;
