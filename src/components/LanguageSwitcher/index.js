import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (lang) =>
    {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    }

    return (
        <>
            <span>Layout in progress...</span>
        </>
    );
};

export default LanguageSwitcher;
