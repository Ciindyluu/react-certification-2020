import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Favorites from '../Favorites/Favorites';
import useAuth from '../../store/auth/useAuth';

const ProtectedRoute = ({ ...props }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...props} /> : null;
};

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <ProtectedRoute component={Favorites} path="/favorites" exact />
        <Route component={Video} path="/:id" exact />
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
