import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// resources
import EN from "./en/global.json";

const resources = {
  en: { global: EN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
