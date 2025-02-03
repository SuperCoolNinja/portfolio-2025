import { useTranslation } from "react-i18next";
import style from "./style.module.css";

export const AboutMe: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <p className={style.content}>{t("about_me_one")}</p>
      <p className={style.content}>{t("about_me_two")}</p>
      <p className={style.content}>{t("about_me_three")}</p>
      <p className={style.content}>{t("about_me_four")}</p>
    </div>
  );
};
