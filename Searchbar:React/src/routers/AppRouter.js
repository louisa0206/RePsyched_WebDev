import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Main from '../components/Main';
import AutoCompleteText from '../components/AutoCompleteText';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/help" component={HelpPage} />
        <Route path="/search" component={AutoCompleteText}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
