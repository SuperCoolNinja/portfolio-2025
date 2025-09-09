import type { IProjectsData } from "../../../interfaces/IProjectsData";

const ProjectItemCard: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return <div>{project.name}</div>;
};

export default ProjectItemCard;
