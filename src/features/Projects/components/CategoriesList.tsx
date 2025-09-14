import React from "react";
import styles from "../project.module.css";
import type { ICategory } from "../../../interfaces/ICategory";
import CardsListSlider from "./CardListSlider";

const CategoriesList: React.FC<{ filteredCategories: ICategory[] }> = ({
  filteredCategories,
}) => {
  return (
    <>
      {filteredCategories.map((category) => (
        <div key={category.name} className={styles.category_list}>
          <h2 className={styles.category_title}>{category.name}</h2>
          <CardsListSlider projects={category.projects} />
        </div>
      ))}
    </>
  );
};

export default CategoriesList;
