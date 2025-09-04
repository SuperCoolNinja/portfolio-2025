import { useState } from "react";
import Project from "../features/Projects/Project";
import Skills from "../features/Skills/Skills";
import Menu from "../features/Menu/Menu";
import About from "../features/About/About";

const Home: React.FunctionComponent = () => {
  const items: string[] = ["About", "Projects", "Skills"];
  const [selected, setSelected] = useState<string>(items[0]);

  return (
    <div>
      <Menu items={items} selected={selected} onSelect={setSelected} />

      {selected === "About" && <About />}
      {selected === "Projects" && <Project />}
      {selected === "Skills" && <Skills />}
    </div>
  );
};

export default Home;
