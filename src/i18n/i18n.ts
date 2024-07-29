import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation } from './locales';

i18next.use(initReactI18next).init({
  lng: 'ru',
  resources: {
    ru: {
      translation,
    },
  },
});
