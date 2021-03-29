//import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        GatorTPED
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = (theme) => ({

    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(3, 0, 1),
        backgroundColor: 'grey',
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        margin: theme.spacing(2, 0, 3),
        backgroundColor: 'blue'
    },
    grid: {
        margin: theme.spacing(0,0,3)
    },
    text: {
      color: 'white'
    },
    bgpaper: {
      display: 'flex',
      flex: '1',
      '& > *': {
        margin: theme.spacing(0),
      },
    }
});


class Login extends Component {

    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {}
      };
    }

    componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
              errors: nextProps.errors
            });
        }
    }

    onChange = e => {

        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {

        e.preventDefault();

        const userData = {
          email: this.state.email,
          password: this.state.password
        };

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };


    render() {

        const { errors } = this.state;
        const { classes } = this.props;
        
        return (

          <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.bgpaper}>
                <Paper elevation={10}>
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            className={classnames("", {
                              invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        <span className="red-text">
                          {errors.email}
                          {errors.emailnotfound}
                        </span>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            className={classnames("", {
                              invalid: errors.password || errors.passwordincorrect
                            })}      
                        />
                        <span className="red-text">
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>

                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Login
                        </Button>

                        <Grid container className={classes.grid}>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="/signup" variant="body2" onClick>
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>

                    </form>
                  </div>
                </Paper>
              </div>
              
              <Box mt={4}>
                  <Copyright />
              </Box>
            </Container>
            
          </div>
          
        );
      }
}

Login.propTypes = {

  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{ loginUser })(withStyles(useStyles)(Login));