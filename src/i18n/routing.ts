import { useEffect } from "react";
import { LOCALES_DEFAULT, LOCALES_LIST } from "../constants/language";
import i18n from "./18n";
import { useLocation } from "react-router-dom";

export const useLanguageSync = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lang = searchParams.get('lang');

  const currentLang = lang && LOCALES_LIST.includes(lang)
    ? lang
    : LOCALES_DEFAULT;

  useEffect(() => {
    if (currentLang && LOCALES_LIST.includes(currentLang) ) {
      i18n.changeLanguage(currentLang);
      document.documentElement.lang = currentLang;
    }
  }, [currentLang, location]);

  return {
    currentLanguage: currentLang,
  };
};