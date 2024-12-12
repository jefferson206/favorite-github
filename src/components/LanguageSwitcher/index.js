import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Select } from './styles';
import { languagesAvailable } from '../../i18n';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    const [selectedLanguage, setSelectedLanguage] = useState(storedLang);

    const changeLanguageHandler = (event) =>
    {
        const lang = event.target.value;
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    }
 
    return (
        <Container>
            <Select value={selectedLanguage} onChange={changeLanguageHandler}>
                {languagesAvailable.map((lang) => (
                    <option key={lang} value={lang}>
                        {t(`Languages.${lang}`)}
                    </option>
                ))}
            </Select>
      </Container>
    );
};

export default LanguageSwitcher;
