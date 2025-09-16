import styles from "../project.module.css";
import Tag from "../../../components/Tag/Tag";

const TopCard: React.FunctionComponent<{
  name: string;
  bg?: string;
  color?: string;
  label: string;
}> = ({ name, bg, color, label }) => {
  return (
    <div className={styles.wrapper_name_tag}>
      <h4 className={styles.name}>{name}</h4>
      <Tag
        style={{
          fontFamily: "system-ui",
          fontWeight: "600",
          padding: "0.3rem 0.7rem",
          backgroundColor: bg ?? "",
          color: color ?? "",
        }}
        label={label}
      />
    </div>
  );
};

export default TopCard;
