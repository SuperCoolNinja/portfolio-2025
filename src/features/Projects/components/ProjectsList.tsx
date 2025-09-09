import styles from "../project.module.css";

import type { IProjectsData } from "../../../interfaces/IProjectsData";
import ProjectItemCard from "./ProjectItemCard";

const ProjectLists: React.FunctionComponent<{ projects: IProjectsData[] }> = ({
  projects,
}) => {
  return (
    <div className={styles.list_container}>
      {projects.map((v) => (
        <ProjectItemCard key={v.id} project={v} />
      ))}
    </div>
  );
};

export default ProjectLists;
