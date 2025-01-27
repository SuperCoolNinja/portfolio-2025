import { useTranslation } from "react-i18next";
import { Button } from "./button";

import style from "./style.module.css";

export const Actions: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ul className={style.wrapper_actions}>
      <li className={`${style.selected} ${style.action}`}>
        <Button label={t("btn_about")} />
      </li>
      <li className={style.action}>
        <Button label={t("btn_projects")} />
      </li>
      <li className={style.action}>
        <Button label={t("btn_skills")} />
      </li>
    </ul>
  );
};
