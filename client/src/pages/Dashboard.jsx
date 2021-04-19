
// import React from 'react'

// const user = JSON.parse(localStorage.getItem('profile'));
// const token = user?.token;

// const Dashboard = () => {

//     return (
//       <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
//               THIS IS THE EDIT PROFILE PAGE
//               Will have an editable form that allows particular users 
//               to edit information about their profile in the database
//               by editing the schema (name, major, grad year, position, etc.)
//       </div>
//     )
  


// }

// export default Dashboard

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { updateProfile } from '../actions/auth';
import Input from './Input';

import { makeStyles } from '@material-ui/core/styles';

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
  <div style={{ position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%, -50%)'}}>
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <Typography component="h1" variant="h5"> Edit Profile </Typography>
          <Typography textColor='gray' component="b1" variant="b5"> To change any account information, fill out this form and click confirm (do not change account email) </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="major" label="Major" handleChange={handleChange} half />
              <Input name="gradYear" label="Graduation Year" handleChange={handleChange} half />
              <Input name="clubPosition" label="Club Position (Member/Officer)" handleChange={handleChange} />

            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Confirm Changes
            </Button>
          </form>
        </Paper>
      </Container>
    </div>

  
  );



};


export default Dashboard;
