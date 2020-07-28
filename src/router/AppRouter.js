import React, { Fragment, useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Todo} from '../pages/Todo';

/**
 *Defining Main Routes
 *
 * @returns
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <Route
            exact
            path="/"
            component={Todo} 
          />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
