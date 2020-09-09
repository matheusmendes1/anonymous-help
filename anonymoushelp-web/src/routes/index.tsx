import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Timeline from '../pages/Timeline';
import Profile from '../pages/Profile';
import Share from '../pages/Share';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/timeline" component={Timeline} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/share" component={Share} isPrivate />
  </Switch>
);

export default Routes;
