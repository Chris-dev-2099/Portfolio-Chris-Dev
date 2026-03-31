import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslations from "./assets/i18n/es.json";
import enTranslations from "./assets/i18n/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    lng: navigator.language.startsWith("es") ? "es" : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
