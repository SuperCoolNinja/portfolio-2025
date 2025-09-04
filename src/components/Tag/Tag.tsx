import type { ITag } from "../../interfaces/ITag";
import styles from "./tags.module.css";

const Tag: React.FunctionComponent<ITag> = ({ label, classname }) => {
  return <div className={`${styles.item} ${classname ?? ""}`}>{label}</div>;
};

export default Tag;
