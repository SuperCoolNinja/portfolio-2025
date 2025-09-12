import styles from "../project.module.css";
import type { IProjectsData } from "../../../interfaces/IProjectsData";
import Card from "../../../components/Card/Card";
import Tag from "../../../components/Tag/Tag";

const ProjectItemCard: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return (
    <Card
      style={{
        borderRadius: "1.5rem",
      }}
    >
      <img src={project.image} alt={project.name} className={styles.img} />
      <div>
        <div className={styles.wrapper_title_tag}>
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
        </div>
        <p>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectItemCard;
