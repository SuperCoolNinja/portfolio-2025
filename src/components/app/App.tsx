import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProfilPicture } from "../profil_picture";
import { FullName } from "../fullname";
import { ListSocialsIcons } from "../socials";
import "../../i18n/config";
import { Separator } from "../separator";
import { Actions } from "../actions";
import { AboutMe } from "../about_me";
import { EActions } from "../../enums/EActions";
import { Project } from "../project";
import { Skill } from "../skill";

export const App = () => {
  const { i18n } = useTranslation();
  const [actionLabel, setActionLabel] = useState<EActions>(EActions.ABOUT);

  useEffect(() => {
    const navLanguage = navigator.language;
    i18n.changeLanguage(navLanguage);
  }, [i18n]);

  const handleActionChange = (newAction: EActions) => {
    setActionLabel(newAction);
  };

  return (
    <div>
      <ProfilPicture />
      <FullName />
      <ListSocialsIcons />
      <Separator />

      <Actions lastAction={actionLabel} onActionChange={handleActionChange} />

      {/* Affichage conditionnel selon l'action */}
      {actionLabel === EActions.ABOUT && <AboutMe />}
      {actionLabel === EActions.PROJECT && <Project />}
      {actionLabel === EActions.SKILL && <Skill />}
    </div>
  );
};
