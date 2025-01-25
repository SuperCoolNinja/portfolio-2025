import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./fr/translation.json";
import translationEN from "./en/translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  resources: {
    fr: {
      translation: translationFR,
    },
    en: {
      translation: translationEN,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});
