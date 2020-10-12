import React from 'react'
import { Grid } from '@material-ui/core';
import Security from '@material-ui/icons/Security';
import { Field } from 'formik';
import styles from './LicenseCodeField.module.css';

const LicenseCodeField = (props) => {
  return (
    <Grid container spacing={1} alignItems="flex-end" className={styles.padding}  >
      <Grid item xs={1}>
        <Security />
      </Grid>
      <Grid item xs={11}>
        <Field {...props} className={styles.LicenseCodeField} />
      </Grid>
    </Grid>
  )
}

export default LicenseCodeField
