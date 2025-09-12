import styles from "../project.module.css";
import type { ICategory } from "../../../interfaces/ICategory";
import ProjectLists from "./ProjectsList";

const CategoryItem: React.FC<{ category: ICategory }> = ({ category }) => {
  return (
    <li key={category.name}>
      <h3 className={styles.category_title}>{category.name}</h3>
      <ProjectLists projects={category.projects} />
    </li>
  );
};

export default CategoryItem;
