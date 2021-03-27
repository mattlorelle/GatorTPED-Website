//react imports
import React from 'react';
import {Route, Switch} from "react-router-dom"
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

import store from "../store";

//local imports (subpages)
import Home from "../pages/Home";
import ProjectSearch from "../pages/ProjectSearch";
import Calendar from "../pages/Calendar";
import Contact from "../pages/Contact";
import EBoard from "../pages/EBoard";
import Faq from "../pages/Faq";
import EditProfile from "../pages/EditProfile";
import SubmitPost from "../pages/SubmitPost";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import PrivateRoute from "../private-route/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

export default function Routes() {

    return (
        <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/projectsearch" render={props => <ProjectSearch {...props} />} />
            <Route exact path="/calendar" render={props => <Calendar {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
            <Route exact path="/eboard" render={props => <EBoard {...props} />} />
            <Route exact path="/faq" render={props => <Faq {...props} />} />
            <Route exact path="/editprofile" render={props => <EditProfile {...props} />} />
            <Route exact path="/submitpost" render={props => <SubmitPost {...props} />} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route exact path="/signup" render={props => <Signup {...props} />} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Switch>
    );
}