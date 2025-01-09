import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import en from '../../locales/en.json'; // Create your translation files (en.json, etc.)
import fr from '../../locales/fr.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next) // Pass the i18n instance to React
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false,
    },
  });

// Detect and set language automatically
const preferredLanguage = Localization.getLocales()[0].languageCode;
i18n.changeLanguage(preferredLanguage);

export default i18n;
