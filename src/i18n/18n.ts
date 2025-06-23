import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCALES_DEFAULT } from '../constants/language';
import en from '../../public/locales/en.json';
import vi from '../../public/locales/vi.json';
import ja from '../../public/locales/ja.json';
import zh from '../../public/locales/zh.json';

i18n
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
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n; 