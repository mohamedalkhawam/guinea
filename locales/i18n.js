import en from './en';
import fr from './fr';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'fr',
  debug: true,
  resources: {
    en: {
      translations: en,
    },
    fr: {
      translations: fr,
    },
  },
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  preload: ['en', 'fr'],
  lng: ['en', 'fr'],
  lngWhitelist: ['en', 'fr'],
  ns: 'translations',
  supportedLngs: ['en', 'fr'],
  load: 'all',
  cleanCode: true,
  saveMissingTo: 'all',
});
export default i18n;
