import { useTranslation } from "react-i18next";
import { Button } from "./button";
import { EActions } from "../../enums/EActions";
import style from "./style.module.css";

export const Actions: React.FunctionComponent<{
  lastAction: EActions;
  onActionChange: (newAction: EActions) => void;
}> = ({ lastAction, onActionChange }) => {
  const { t } = useTranslation();

  return (
    <ul className={style.wrapper_actions}>
      <li
        onClick={() => onActionChange(EActions.ABOUT)}
        className={`${lastAction === EActions.ABOUT ? style.selected : ""} ${
          style.action
        }`}
      >
        <Button label={t("btn_about")} />
      </li>
      <li
        onClick={() => onActionChange(EActions.PROJECT)}
        className={`${lastAction === EActions.PROJECT ? style.selected : ""} ${
          style.action
        }`}
      >
        <Button label={t("btn_projects")} />
      </li>
      <li
        onClick={() => onActionChange(EActions.SKILL)}
        className={`${lastAction === EActions.SKILL ? style.selected : ""} ${
          style.action
        }`}
      >
        <Button label={t("btn_skills")} />
      </li>
    </ul>
  );
};
