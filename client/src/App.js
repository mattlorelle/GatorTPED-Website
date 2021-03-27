//react imports
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

//router and local imports
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/Routes";
import Appbar from "./appbar/Appbar";
import { Provider } from "react-redux";
import store from "./store";

const useStyles = makeStyles({
    container: {
        display: "flex"
    }
})

export default function App() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            
            {/* Everything in this App has to be wrapped in a BrowserRouter to function properly*/}
            <Provider store={store}>
                <Router>
                    <Appbar /> {/* Appbar which includes login dropdown and swing out sidebar */}
                    <Routes /> {/* Routing functions for subpages */}
                </Router>
            </Provider>
            
        </div>
    );
}