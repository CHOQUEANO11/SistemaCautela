import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp/Dropdown";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers/index";
import Apresentation from "./pages/Apresentation/index";
import Report from "./pages/Report"
import DetailReport from"./pages/DetailReport"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/apresentation" component={Apresentation} />
      <Route path="/home" component={Home} />
      <Route path="/listusers" component={ListUsers} />
      <Route path="/report" component={Report} />
      <Route path="/detailreport" component={DetailReport} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
