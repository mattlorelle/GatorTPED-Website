import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const DashboardInfo = ({ name, handleChange, label, half, autoFocus, type }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      variant="outlined"
      disabled
      fullWidth
      label={label}
    />
  </Grid>
);

export default DashboardInfo;