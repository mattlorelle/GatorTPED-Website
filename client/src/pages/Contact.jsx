import React, { Component } from "react";
import axios from "axios";

//material ui imports
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from '@material-ui/core/Button';


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

const useStyles = theme => ({

    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Contact extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        sent: false,
        buttonText: "Send Message",
        emailError: false,
    };

    // Functions

    resetForm = () => {

        this.setState({
            name: "",
            message: "",
            email: "",
            subject: "",
            buttonText: "Message Sent",
        });

        setTimeout(() => {
        this.setState({ sent: false });
        }, 3000);
    };

    handleChangeEmail(e) {
        if (!e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            
            this.setState({
                email: e.target.value,
            });
            this.setState({ emailError: true });

            if (this.state.email === "")
                this.setState({ emailError: false }); // check if the input is empty
        } 
        else
            this.setState({ email: e.target.value, emailError: false });
    }

    formSubmit = async (e) => {

        e.preventDefault();

        this.setState({
            buttonText: "...sending",
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject,
        };

        try {
            await axios.post("BACKEND_URL", data);
            this.setState({ sent: true }, this.resetForm());
        } catch (error) {
            console.log(error);
        }
    };


    render() {

        const { classes } = this.props;

        return (

            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <ContactMailIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Contact Us
                        </Typography>
                        <form className={classes.form} onSubmit={(e) => this.formSubmit(e)}>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Name"
                                placeholder="Enter your full name"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                            <TextField
                                type="email"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                placeholder="Enter your email address"
                                name="email"
                                autoFocus
                                value={this.state.email}
                                onChange={(e) => this.handleChangeEmail(e)}
                                error={this.state.emailError}
                            />
                            <TextField
                                type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="subject"
                                label="Subject"
                                placeholder="Enter message subject"
                                name="subject"
                                autoFocus
                                value={this.state.subject}
                                onChange={(e) => this.setState({ subject: e.target.value })}
                            />
                            <TextField
                                type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                placeholder="What would you like to say to us?"
                                name="message"
                                autoFocus
                                multiline
                                rows="6"
                                rowsMax={10}
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value })}
                            />
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                Send
                            </Button>
                        </form>
                    </div>
                    <Box mt={2}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(Contact);