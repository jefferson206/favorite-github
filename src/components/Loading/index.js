import React from "react";
import { Loading, WrapperRuby, Title } from "./styles";
import { useTranslation } from "react-i18next";

function LoadingComponent() {
    const { t } = useTranslation();

    return (
        <Loading>
            <WrapperRuby>
                <Title>{t('Core.Loading')}</Title>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </WrapperRuby>
        </Loading>
    );
}

export default LoadingComponent;
