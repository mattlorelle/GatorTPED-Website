//react imports
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//router and local imports
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/Routes";
import Appbar from "./appbar/Appbar";
import Footer from "./appbar/Footer";
import background from "./images/bg.jpg";

const useStyles = makeStyles({
    root: {
        //backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        height: '100%',
        minWidth: '100%',
        backgroundSize: '30%',
        display: 'flex',
        overflowX: 'scroll'
    },
})

export default function App() {

    const classes = useStyles();

    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    return (
        <div /*className={classes.root} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}*/>
            <CssBaseline/>
            
            {/* Everything in this App has to be wrapped in a BrowserRouter to function properly*/}
                <Router>
                    <div>
                        <Appbar /> {/* Appbar which includes login dropdown and swing out sidebar */}
                        <Routes /> {/* Routing functions for subpages */}
                        <Footer />
                    </div>
                </Router>
        </div>
    );
}