import React from 'react';
import { useTranslation } from 'react-i18next';
const WelcomePage = () => {
    const { t } = useTranslation("words");
    return (
        <h2>{t("welcome")}</h2>
    )
}

export default WelcomePage
