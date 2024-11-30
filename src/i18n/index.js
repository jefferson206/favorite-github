import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import pt from './pt.json';

const storedLang = localStorage.getItem('i18nextLng');
const language = storedLang || 'en'; 

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pt: { translation: pt },
        },
        fallbackLng: language,
        lng: language,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });
export default i18n;
