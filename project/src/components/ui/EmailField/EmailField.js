import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const EmailField = (props) => {
  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={1}>
        <AccountCircle />
      </Grid>
      <Grid item xs={11}>
        <TextField {...props} />
      </Grid>
    </Grid>
  )
}

export default EmailField
