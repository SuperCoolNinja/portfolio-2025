import Tag from "../../../components/Tag/Tag";
import { Colors } from "../../../utils/colors";
import styles from "../about.module.css";

type AboutTagProps = { tags: string[] };
const AboutTags: React.FunctionComponent<AboutTagProps> = ({ tags }) => {
  return (
    <ul className={styles.items}>
      {tags.map((v) => (
        <li key={v}>
          <Tag
            style={{
              backgroundColor: Colors[v.toUpperCase()]?.backgroundColor ?? "",
              color: Colors[v.toUpperCase()]?.color ?? "",
            }}
            label={v}
          />
        </li>
      ))}
    </ul>
  );
};

export default AboutTags;
