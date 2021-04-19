import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { updateProfile } from '../actions/auth';
import Input from './Input';

import { makeStyles } from '@material-ui/core/styles';

import DashboardInfo from './DashboardInfo';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = { firstName: '', lastName: '', email: '', password: '', major: '', gradYear: '', clubPosition: '' };


const Dashboard = () => {

  const [form, setForm] = useState(initialState);
  var [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(form, history));
    e.target.reset();
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    
    <div>
      <div style={{ position: 'absolute', left: '33%', top: '50%', transform: 'translate(-50%, -50%)'}}>
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={3}>
          <Typography component="h1" variant="h5"> Dashboard </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <DashboardInfo name="firstName" label={user?.result.name} />
                <DashboardInfo name="email" label={user?.result.email} />
                <DashboardInfo name="major" label={user?.result.major}  half />
                <DashboardInfo name="gradYear" label={user?.result.gradYear}  half />
                <DashboardInfo name="clubPosition" label={user?.result.clubPosition}  />
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>

    <div style={{ position: 'absolute', left: '67%', top: '50%', transform: 'translate(-50%, -50%)'}}>
        <Container component="main" maxWidth="sm">
          <Paper className={classes.paper} elevation={3}>
            <Typography component="h1" variant="h5"> Edit Profile </Typography>
            <Typography component="b1" variant="b5"> (Once applied, please logout and login again to see account changes) </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                <Input name="email" label="Email Address (do not change account email)" handleChange={handleChange} type="email" />
                <Input name="password" label="Password (used for verifying changes)" handleChange={handleChange} type="password"/>
                <Input name="major" label="Major" handleChange={handleChange} half />
                <Input name="gradYear" label="Graduation Year" handleChange={handleChange} half />
                <Input name="clubPosition" label="Club Position (Future Member/Member/Officer)" handleChange={handleChange} />

              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Confirm Changes
              </Button>
            </form>
          </Paper>
        </Container>
      </div>

    </div>
    
  
  );



};


export default Dashboard;
