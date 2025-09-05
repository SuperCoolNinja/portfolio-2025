import Tag from "../../../components/Tag/Tag";
import styles from "../about.module.css";

type AboutTagProps = { tags: string[] };
const AboutTags: React.FunctionComponent<AboutTagProps> = ({ tags }) => {
  return (
    <ul className={styles.items}>
      {tags.map((v) => (
        <li key={v}>
          <Tag label={v} />
        </li>
      ))}
    </ul>
  );
};

export default AboutTags;
