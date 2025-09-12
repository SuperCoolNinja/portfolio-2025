import type { IProjectsData } from "../../../interfaces/IProjectsData";
import Card from "../../../components/Card/Card";

const ProjectItemCard: React.FunctionComponent<{ project: IProjectsData }> = ({
  project,
}) => {
  return (
    <Card
      style={{
        padding: "1rem",
        borderRadius: "1.5rem",
      }}
    >
      {project.name}
    </Card>
  );
};

export default ProjectItemCard;
