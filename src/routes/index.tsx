import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Location from '../pages/Location';
import Products from '../pages/Products';
import Product from '../pages/Product';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/location" component={Location} isPrivate />
    <Route path="/products" component={Products} isPrivate />
    <Route path="/product" component={Product} isPrivate />
  </Switch>
);

export default Routes;
