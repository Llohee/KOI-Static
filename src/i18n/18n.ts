import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCALES_DEFAULT } from '../constants/language';
import en from '../../public/locales/en.json';
import vi from '../../public/locales/vi.json';
import ja from '../../public/locales/ja.json';
import zh from '../../public/locales/zh.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      ja: { translation: ja },
      zh: { translation: zh },
    },
    fallbackLng: LOCALES_DEFAULT,
    initImmediate: false,
    detection: {
      order: ['querystring'],
      lookupQuerystring: 'lang',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n; 