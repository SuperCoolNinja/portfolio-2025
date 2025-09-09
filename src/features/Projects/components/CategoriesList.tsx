import type { ICategory } from "../../../interfaces/ICategory";
import CategoryItem from "./CategoryItem";

const CategoriesList: React.FunctionComponent<{
  filteredCategories: ICategory[];
}> = ({ filteredCategories }) => {
  return (
    <ul>
      {filteredCategories.map((cat) => {
        return <CategoryItem key={cat.name} category={cat} />;
      })}
    </ul>
  );
};

export default CategoriesList;
