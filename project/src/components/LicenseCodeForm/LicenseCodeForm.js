import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import LicenseCodeField from '../../components/ui/LicenseCodeField/LicenseCodeField';
import Cta from '../../components/ui/Cta/Cta';

const LicenseCodeForm = ({ doCheckLicenseCode }) => {
    const { t } = useTranslation("words");
    const licenseCodeSelector = useSelector(state => state.auth.licenseCode);
    return (
        <Formik
            initialValues={{
                licenseCode: licenseCodeSelector,
            }}
            validationSchema={Yup.object().shape({
                licenseCode: Yup.string()
                    .matches("^[A-Z0-9]+$", 'invalid licenseCode must number or characters in Capital Case')
                    .min(11, 'licenseCode must be at least 11 characters')
                    .required('licenseCode is required').nullable()
            })}
            onSubmit={fields => {
                doCheckLicenseCode(fields);
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <Grid container>
                        <Grid item xs={12}>
                            <LicenseCodeField
                                xs={12}
                                name="licenseCode"
                                type="text"
                                label="License Code"
                                fullWidth
                            />
                            <ErrorMessage name="licenseCode" component="div" className="invalid-feedback" />
                        </Grid>
                        <Grid item xs={12}>
                            <Cta type="submit"  > {t("save_License_Code")} </Cta>
                        </Grid>
                    </Grid>
                </Form>
            )}
        />

    );
};

export default LicenseCodeForm
