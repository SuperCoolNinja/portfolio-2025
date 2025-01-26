import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProfilPicture } from "../profil_picture";
import { FullName } from "../fullname";
import { ListSocialsIcons } from "../socials";
import "../../i18n/config";

export const App = () => {
  const { t, i18n } = useTranslation();

  // The language will depend on the user navigator language used.
  useEffect(() => {
    const navLanguage = navigator.language;
    i18n.changeLanguage(navLanguage);
  }, [i18n]);

  return (
    <div>
      <ProfilPicture />
      <FullName />
      <ListSocialsIcons />
      <p>{t("hello")}</p>
    </div>
  );
};
