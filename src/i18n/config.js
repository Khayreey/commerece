import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translations.json'
import translationAr from './locales/ar/translations.json'


i18n.use(initReactI18next).init({
  debug: true, 
  fallbackLng: 'en',
  
  resources: {
    en: {
      translations: translationEn
    },
    ar: {
      translations: translationAr
    }
  },
 
  ns: ['translations'],
  defaultNS: 'translations'
});


i18n.languages = ['en', 'ar'];

export default i18n;