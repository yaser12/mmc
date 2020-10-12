import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const PasswordField = (props) => {
  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={1}>
        <LockIcon />
      </Grid>
      <Grid item xs={11}>
        <TextField {...props} type="password" />
      </Grid>
    </Grid>
  )
}

export default PasswordField
