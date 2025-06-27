import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCALES_DEFAULT, LOCALES_LIST } from '../constants/language';
import en from '../../public/locales/en.json';
import vi from '../../public/locales/vi.json';
import ja from '../../public/locales/ja.json';
import zh from '../../public/locales/zh.json';

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const lang = searchParams.get('lang');
    return lang && LOCALES_LIST.includes(lang) ? lang : LOCALES_DEFAULT;
  }
  return LOCALES_DEFAULT;
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      ja: { translation: ja },
      zh: { translation: zh },
    },
    lng: getInitialLanguage(),
    fallbackLng: LOCALES_DEFAULT,
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n; 