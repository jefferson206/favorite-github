import React from "react";
import { useTranslation } from "react-i18next";
import { PageActions } from "./styles";

export function FootersRepo({page, onHandlePage }) {
    const { t } = useTranslation();

    function handlePage(value) {
        onHandlePage(value);
    }

    return (
        <PageActions>
            <button 
                type="button" 
                onClick={() => handlePage('back') }
                disabled={page < 2}
                >{t('Buttons.Previous')}</button>
            <button type="button" onClick={() => handlePage('next') }>{t('Buttons.Next')}</button>
        </PageActions>
    );
}