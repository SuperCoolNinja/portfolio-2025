import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProfilPicture } from "../profil_picture";
import { FullName } from "../fullname";
import { ListSocialsIcons } from "../socials";
import "../../i18n/config";
import { Separator } from "../separator";
import { Actions } from "../actions";
import { AboutMe } from "../about_me";

export const App = () => {
  const { i18n } = useTranslation();

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
      <Separator />
      <Actions />
      <AboutMe />
    </div>
  );
};
