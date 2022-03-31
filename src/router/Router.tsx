import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '@pages/login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import PrivateRouter from './PrivateRouter';

const Router: React.FC = () => {
  const session = useSelector((state: RootState) => state.session);

  return (
    <>
      <Route exact path="/">
        {session.isLoggedIn ? <Redirect to="/admin" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={PrivateRouter} />
    </>
  );
};

export default Router;
