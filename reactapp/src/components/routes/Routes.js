import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from '../pages/web/Home';
import Account from '../pages/user/Account';
import Login  from '../pages/web/Login';
import Logout from '../pages/web/Logout';
import Admin from '../pages/admin/Admin';
import PageNotFound from '../pages/shared/PageNotFound';
import NotAuthorized from '../pages/shared/NotAuthorized';
import Leaderboard from '../pages/utils/leaderboard/Leaderboard';
import Games from '../pages/utils/games/Games';
import Shop from '../pages/utils/Shop';
import Badges from '../pages/utils/Badges';
import Profile from '../pages/user/Profile';
import ForgotPass from '../pages/utils/ForgotPass';
import AuthRoute from './AuthRoute';
import AdminRoute from './AdminRoute';

import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Routes() {

  const {isLoggedIn} = useContext(AppContext);

  return (
    <>
    {/* <div style={{marginTop: '80px'}}></div> */}
    <div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/forgot" exact  component={ForgotPass} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/leaderboard" exact component={Leaderboard} />


        <AuthRoute path="/account" exact component={Account} isSignedIn={isLoggedIn} />
        <AuthRoute path="/profile" exact  component={Profile} isSignedIn={isLoggedIn} />
        <AuthRoute path="/games" exact component={Games} isSignedIn={isLoggedIn} />
        <AuthRoute path="/shop" exact component={Shop} isSignedIn={isLoggedIn} />
        <AuthRoute path="/badges" exact component={Badges} isSignedIn={isLoggedIn} />


        <AdminRoute path="/admin" exact component={Admin} isAnAdmin={true} />

        <Route path="/notauthorized" exact component={NotAuthorized} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
    </>
  )
}

export default Routes;
