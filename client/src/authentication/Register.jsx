import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
      marginTop: theme.spacing(1),
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

class Register extends Component {

    constructor() {
      super();
      this.state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
      };
    }

    componentDidMount() {
      // If logged in and user navigates to Register page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }

    componentWillReceiveProps(nextProps) {
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

      const newUser = {

          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
      };

      this.props.registerUser(newUser, this.props.history); 
    };


    render() {

        const { errors } = this.state;
        const { classes } = this.props;

        return (

          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.bgpaper}>
                <Paper elevation={10}>
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>

                      <Grid container spacing={2}>

                          <Grid item xs={12} sm={6}>
                            <TextField
                                  variant="outlined"
                                  autoFocus
                                  required
                                  fullWidth
                                  id="firstname"
                                  label="First Name"
                                  autoComplete="fname"
                                  onChange={this.onChange}
                                  value={this.state.firstname}
                                  error={errors.firstname}
                                  className={classnames("", {
                                    invalid: errors.firstname
                                  })}
                              />
                          </Grid>
                          <span className="red-text">{errors.firstname}</span>

                          <Grid item xs={12} sm={6}>
                            <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="lastname"
                                  label="Last Name"
                                  autoComplete="lname"
                                  onChange={this.onChange}
                                  value={this.state.lastname}
                                  error={errors.lastname}
                                  className={classnames("", {
                                    invalid: errors.lastname
                                  })}
                              />
                          </Grid>
                          <span className="red-text">{errors.lastname}</span>
                          
                          <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                className={classnames("", {
                                  invalid: errors.email
                                })}
                            />
                          </Grid>
                          <span className="red-text">{errors.email}</span>

                          <Grid item xs={12}>
                            <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  type="password"
                                  id="password"
                                  label="Password"
                                  autoComplete="password"
                                  onChange={this.onChange}
                                  value={this.state.password}
                                  error={errors.password}
                                  className={classnames("", {
                                    invalid: errors.password
                                  })}
                              />
                          </Grid>
                          <span className="red-text">{errors.password}</span>

                          <Grid item xs={12}>
                          <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="password"
                                id="password2"
                                label="Confirm Password"
                                autoComplete="password"
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                className={classnames("", {
                                  invalid: errors.password2
                                })}
                            />
                          </Grid>
                          <span className="red-text">{errors.password2}</span>
                      </Grid>

                      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                          Sign Up
                      </Button>

                      <Grid className={classes.grid} container justify="flex-end">
                          <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                          </Grid>
                      </Grid>

                    </form>
                  </div>
                </Paper>
                  
              </div>
              <Box mt={5}>
                  <Copyright />
              </Box>
            </Container>
      </div>
    );
  }
}

Register.propTypes = {

    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withStyles(useStyles)(Register));