import { useEffect } from "react";
import "../../i18n/config";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();

  // The language will depend on the user navigator language used.
  useEffect(() => {
    const navLanguage = navigator.language;
    i18n.changeLanguage(navLanguage);
  }, [i18n]);

  return (
    <div className="App">
      <p>{t("hello")}</p>
    </div>
  );
};
