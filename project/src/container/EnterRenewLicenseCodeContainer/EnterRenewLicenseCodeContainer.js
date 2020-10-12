import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LICENSECODE } from '../../configs/paths';
import styles from './EnterRenewLicenseCodeContainer.module.css';

const EnterRenewLicenseCodeContainer = () => {
    const { t } = useTranslation("words");
    const licenseCode = useSelector(state => state.auth.licenseCode);
    let textLink = t("enter_license_code");
    if (licenseCode != null) {
        textLink = t("renew_license_code");
    }
    let link = <Link to={LICENSECODE} className={styles.link}>{textLink} </Link>;
    return link;
}

export default EnterRenewLicenseCodeContainer
