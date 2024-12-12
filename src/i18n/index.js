import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLang = localStorage.getItem('i18nextLng');
const language = storedLang || 'en'; 

export const languagesAvailable = ['pt', 'es', 'it', 'fr', 'de', 'ja', 'zh-CN', 'ru', 'nl', 'pl', 'en'] // ['en', 'pt'];

const resources = languagesAvailable.reduce((acc, lang) => {
    acc[lang] = { translation: require(`./${lang}.json`) };
    return acc;
}, {});

i18n.use(initReactI18next)
    .init({
        resources,
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
