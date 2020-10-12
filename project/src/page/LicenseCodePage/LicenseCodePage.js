import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import styles from './LicenseCodePage.module.css';
import LicenseCodeContainer from '../../container/LicenseCodeContainer/LicenseCodeContainer';

const LicenseCodePage = () => {
    const { t } = useTranslation("words");
    return (
        <>
            <Paper elevation={1} className={styles.paper}>
                <h2>{t("license_code")}</h2>
                <Divider variant="middle" />
                <LicenseCodeContainer />
            </Paper>
        </>
    );
};

export default LicenseCodePage
