import styles from "../project.module.css";
import type { ICategory } from "../../../interfaces/ICategory";
import CategoryItem from "./CategoryItem";

const CategoriesList: React.FunctionComponent<{
  filteredCategories: ICategory[];
}> = ({ filteredCategories }) => {
  return (
    <ul className={styles.category_list}>
      {filteredCategories.map((cat) => {
        return <CategoryItem key={cat.name} category={cat} />;
      })}
    </ul>
  );
};

export default CategoriesList;
