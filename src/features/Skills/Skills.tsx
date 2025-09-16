import type { JSX } from "react";
import Tag from "../../components/Tag/Tag";
import { Colors } from "../../utils/colors";
import styles from "./skills.module.css";
import { Cookie, Gamepad2, Shapes, SquareChevronRight } from "lucide-react";

const Card = (icon: JSX.Element, title: string, tags: string[]) => (
  <div className={styles.card_container}>
    <div className={styles.card}>
      <section className={styles.card_wrapper_title}>
        {icon}
        <h3 className={styles.card_title}>{title}</h3>
      </section>
      <section className={styles.card_wrapper_tags}>
        {tags.map((v) => (
          <Tag
            key={v}
            style={{
              fontFamily: "system-ui",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              backgroundColor: Colors[v]?.backgroundColor ?? "",
              color: Colors[v]?.color ?? "",
            }}
            label={v}
          />
        ))}
      </section>
    </div>
  </div>
);

const Skills: React.FunctionComponent = () => {
  const FRONT = ["JAVASCRIPT", "REACTJS", "CSS", "TAILWINDCSS", "FIGMA"];
  const BACK = ["TYPESCRIPT", "MONGODB", "EXPRESSJS", "NODEJS"];
  const MODS = ["LUA", "C++", "FIVEM", "GTA V"];
  const GAMEDEV = ["C#", "C", "LUA", "UNITY3D", "LOVE2D", "RAYLIB"];
  const TOOLS = ["GIT", "AGILE/SCRUM", "VSCODE", "VISUAL STUDIO", "POSTMAN"];

  return (
    <div className={styles.container}>
      <section className={styles.wrapper_title_subtitle}>
        <h3 className={styles.title}>Skills</h3>
        <p className={styles.subtitle}>
          From web projects to game creation and modding.
        </p>
      </section>

      <div className={styles.card_wrapper}>
        {Card(<Cookie />, "Frontend", FRONT)}
        {Card(<SquareChevronRight />, "Backend", BACK)}
        {Card(<Gamepad2 />, "Game dev", GAMEDEV)}
        {Card(<Shapes />, "Modding", MODS)}
        {Card(<Gamepad2 />, "Tools & Technologies", TOOLS)}
      </div>
    </div>
  );
};

export default Skills;
