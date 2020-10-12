import React from 'react'
import { useDispatch } from 'react-redux';
import LicenseCodeForm from '../../components/LicenseCodeForm/LicenseCodeForm';
import * as licenseCodeActions from '../../store/actions/licenseCodeActions';

const LicenseCodeContainer = () => {
    const dispatch = useDispatch();
    const doCheckLicenseCode = (formValues) => {
        dispatch(licenseCodeActions.saveLicenseCode({
            licenseCode: formValues.licenseCode
        }))
    };
    return (
        <LicenseCodeForm doCheckLicenseCode={doCheckLicenseCode} />
    )
}

export default LicenseCodeContainer
