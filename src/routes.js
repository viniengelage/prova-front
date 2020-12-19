import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import IndexContacts from './pages/indexContacts'

const Routes = () => {
  return (
      <Switch>
        <Route
          exact
          path="/home"
          component={IndexContacts}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route path="*" component={() => <h1>Page Not Found</h1>} />
      </Switch>

  );
};

export default Routes;
