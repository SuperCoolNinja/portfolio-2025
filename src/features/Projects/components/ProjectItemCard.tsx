import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import Card from "../../../components/Card/Card";
import Tag from "../../../components/Tag/Tag";
import { stackColors } from "../../../utils/colors";
import {
  IconParkPreviewOpen,
  LogosGithubIcon,
} from "../../../components/Logos/Logos";

const ProjectItemCard: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return (
    <Card
      maxWidth="50rem"
      style={{
        borderRadius: "1.5rem",
      }}
    >
      <img src={project.image} alt={project.name} className={styles.img} />
      <div className={styles.card_container}>
        <section className={styles.section_title_tag}>
          <h4>{project.name}</h4>
          <Tag
            style={{
              fontFamily: "system-ui",
              fontWeight: "600",
              padding: "0.5rem",
              backgroundColor: project.backgroundColor,
              color: project.color,
            }}
            label={project.tag}
          />
        </section>
        <p className={styles.card_description}>{project.description}</p>

        <ul className={styles.card_stacks_container}>
          {project.stacks.map((stack, index) => {
            return (
              <li key={index}>
                <Tag
                  style={{
                    fontFamily: "system-ui",
                    fontWeight: "600",
                    padding: "0.5rem 1rem",
                    color: stackColors[stack.toUpperCase()].color,
                    backgroundColor:
                      stackColors[stack.toUpperCase()].backgroundColor,
                  }}
                  label={stack}
                />
              </li>
            );
          })}
        </ul>

        <section className={styles.card_icons_container}>
          {project?.demo && (
            <a href={project?.demo} target="_blank" rel="noopener noreferrer">
              <IconParkPreviewOpen fill={"#30a52c"} />
            </a>
          )}

          {project?.source_code && (
            <li>
              <a href={project?.source_code} target="_blank">
                <LogosGithubIcon fill={"#fff"} />
              </a>
            </li>
          )}
        </section>
      </div>
    </Card>
  );
};

export default ProjectItemCard;
