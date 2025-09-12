import type { ITag } from "../../interfaces/ITag";
import styles from "./tags.module.css";

const Tag: React.FunctionComponent<ITag> = ({ label, style }) => {
  return (
    <div style={style} className={styles.item}>
      {label}
    </div>
  );
};

export default Tag;
