import styles from "./project.module.css";
import { useMemo, useState, useEffect } from "react";
import type { ICategory } from "../../interfaces/ICategory";
import type { IProjectsData } from "../../interfaces/IProjectsData";
import { projects } from "../../data/projects_data";
import Button from "../../components/Button/Button";
import CategoriesList from "./components/CategoriesList";

const Project: React.FunctionComponent = () => {
  const buttons_filter: string[] = [
    "All",
    "Web",
    "Game Development",
    "Game Modification",
  ];
  const [selected, setSelected] = useState<string>(buttons_filter[0]);
  const [isVisible, setIsVisible] = useState(false);

  const [fade, setFade] = useState<"fade-in" | "fade-out">("fade-in");

  const handleFilterChange = (newFilter: string) => {
    setFade("fade-out");
    setTimeout(() => {
      setSelected(newFilter);
      setFade("fade-in");
    }, 300);
  };

  // Animation fade in out to not show the cards directly but smooth instead :
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const groupedCategories: ICategory[] = useMemo(() => {
    const map = new Map<string, IProjectsData[]>();

    projects.forEach((proj) => {
      const cat = proj.category.trim().toLowerCase();
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(proj);
    });

    return Array.from(map.entries()).map(([name, projs]) => ({
      name,
      projects: projs,
    }));
  }, []);

  const filteredCategories =
    selected === "All"
      ? groupedCategories
      : groupedCategories.filter(
          (c) => c.name.toLowerCase() === selected.toLowerCase()
        );

  return (
    <div
      className={`${styles.container} ${
        isVisible ? styles.fadeIn : styles.hidden
      }`}
    >
      <section className={styles.wrapper_title}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A list of projects that I’ve worked on.
        </p>
      </section>
      <div className={styles.btn_container}>
        {buttons_filter.map((v, i) => (
          <Button
            key={i}
            selected={selected}
            setSelected={() => handleFilterChange(v)}
            label={v}
          />
        ))}
      </div>

      <div className={`${styles.categories_container} ${styles[fade]}`}>
        <CategoriesList filteredCategories={filteredCategories} />
      </div>
    </div>
  );
};

export default Project;
