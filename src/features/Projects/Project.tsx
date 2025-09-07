import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./project.module.css";

const Project: React.FunctionComponent = () => {
  const buttons_filter: string[] = [
    "All",
    "Web",
    "Game Development",
    "Game Modification",
  ];
  const [selected, setSelected] = useState<string>(buttons_filter[0]);

  return (
    <div className={styles.container}>
      <section className={styles.wrapper_title}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A list of projects that I’ve worked on.
        </p>
      </section>

      <div className={styles.btn_container}>
        {buttons_filter.map((v, i) => (
          <Button
            selected={selected}
            setSelected={setSelected}
            id={i}
            label={v}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
