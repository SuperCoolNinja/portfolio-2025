import Tag from "../../../components/Tag/Tag";
import { Colors } from "../../../utils/colors";
import styles from "../project.module.css";

const StackList: React.FunctionComponent<{ stacks: string[] }> = ({
  stacks,
}) => {
  return (
    <ul className={styles.stack_list}>
      {stacks.map((v) => {
        return (
          <li key={v}>
            <Tag
              style={{
                fontFamily: "system-ui",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                color: Colors[v?.toUpperCase()].color ?? "",
                backgroundColor: Colors[v?.toUpperCase()].backgroundColor ?? "",
              }}
              label={v}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default StackList;
