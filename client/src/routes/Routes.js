//react imports
import React from 'react';
import {Route, Switch} from "react-router-dom"
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "../actions/authActions";

// import store from "../store";

//local imports (subpages)
import Home from "../pages/Home";
import ProjectSearch from "../pages/ProjectSearch";
import CalendarDisplay from "../pages/Calendar";
import Contact from "../pages/Contact";
import EBoard from "../pages/EBoard";
import Faq from "../pages/Faq";
import SubmitPost from "../pages/SubmitPost";
import Dashboard from "../pages/Dashboard";
//import Form from "../components/Form/Form";

import Auth from '../components/Auth/Auth';

export default function Routes() {

    return (
        <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/projectsearch" render={props => <ProjectSearch {...props} />} />
            <Route exact path="/calendar" render={props => <CalendarDisplay {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
            <Route exact path="/eboard" render={props => <EBoard {...props} />} />
            <Route exact path="/faq" render={props => <Faq {...props} />} />
            <Route exact path="/auth" render={props => <Auth {...props} />} />
            <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route exact path="/submitpost" render={props => <SubmitPost {...props} />} />
        </Switch>
    );
}