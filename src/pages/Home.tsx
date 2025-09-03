import { useState } from "react";
import Project from "../components/Projects/Project";
import Skills from "../components/Skills/Skills";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";

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
