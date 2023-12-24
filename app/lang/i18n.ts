import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import langEn from "./lang.en.json";
import langJa from "./lang.ja.json";
// import moment from 'moment';
// import 'moment-timezone';

const resource = {
  en: {
    translation: langEn,
  },
  ja: {
    translation: langJa,
  },
};

const lang = window.localStorage.getItem("lang");
const japan = "Asia/Tokyo";
const defaultLang = lang === "en" ? "en" : "ja";
// const guess = moment.tz.guess();
// const defaultLang = guess === japan ? "ja" : "en";
const lng = !lang ? defaultLang : lang === "en" ? "en" : "ja";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: resource,
    fallbackLng: defaultLang,
    debug: true,
    lng: lng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then(console.log);

export default i18n;
export { defaultLang };
