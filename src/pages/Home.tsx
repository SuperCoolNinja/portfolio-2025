import { useState } from "react";
import styles from "./home.module.css";
import { About } from "../components/AboutMe/About";
import Project from "../components/Projects/Project";
import Skills from "../components/Skills/Skills";
import Menu from "../components/Menu/Menu";

const Home: React.FunctionComponent = () => {
  const items: string[] = ["About me", "Projects", "Skills"];
  const [selected, setSelected] = useState<string>(items[0]);

  return (
    <div className={styles.container}>
      <Menu items={items} selected={selected} onSelect={setSelected} />

      <div className={styles.contents}>
        {selected === "About me" && <About />}
        {selected === "Projects" && <Project />}
        {selected === "Skills" && <Skills />}
      </div>
    </div>
  );
};

export default Home;
