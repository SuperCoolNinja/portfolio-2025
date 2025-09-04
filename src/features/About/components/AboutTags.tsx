import Tag from "../../../components/Tag/Tag";
import styles from "../about.module.css";

const AboutTags: React.FunctionComponent<{ labels: string[] }> = ({
  labels,
}) => {
  return (
    <ul className={styles.items}>
      {labels.map((v, i) => (
        <li key={i}>
          <Tag label={v} />
        </li>
      ))}
    </ul>
  );
};

export default AboutTags;
