import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  Settings as SettingsView,
  NotFound as NotFoundView,
} from './views';

const Routes = () => (
  <Switch>
    <Redirect
      exact
      from="/"
      to="/dashboard"
    />
    <RouteWithLayout
      component={DashboardView}
      exact
      layout={MainLayout}
      path="/dashboard"
    />
    <RouteWithLayout
      component={ProductListView}
      exact
      layout={MainLayout}
      path="/products"
    />
    <RouteWithLayout
      component={SettingsView}
      exact
      layout={MainLayout}
      path="/settings"
    />
    <RouteWithLayout
      component={NotFoundView}
      exact
      layout={MinimalLayout}
      path="/not-found"
    />
    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
