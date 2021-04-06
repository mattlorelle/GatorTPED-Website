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
import Calendar from "../pages/Calendar";
import Contact from "../pages/Contact";
import EBoard from "../pages/EBoard";
import Faq from "../pages/Faq";
import SubmitPost from "../pages/SubmitPost";
import PrivateRoute from "../private/PrivateRoute";
import Dashboard from "../private/Dashboard";

import Auth from '../components/Auth/Auth';

export default function Routes() {

    return (
        <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/projectsearch" render={props => <ProjectSearch {...props} />} />
            <Route exact path="/calendar" render={props => <Calendar {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
            <Route exact path="/eboard" render={props => <EBoard {...props} />} />
            <Route exact path="/faq" render={props => <Faq {...props} />} />
            <Route exact path="/auth" render={props => <Auth {...props} />} />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/submitpost" component={SubmitPost} />
            </Switch>
        </Switch>
    );
}