import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import Account from '../user/Account';
import Login  from './Login';
import Logout from './Logout';
import Dashboard from '../admin/Dashboard';
import PageNotFound from '../shared/PageNotFound';
import NotAuthorized from '../shared/NotAuthorized';
import Standings from '../utils/Standings';
import Leaderboard from '../utils/Leaderboard';
import Games from '../utils/Games';
import Shop from '../utils/Shop';
import Badges from '../utils/Badges';
import Profile from '../user/Profile';

// import { useContext } from 'react';
// import AppContext from '../../reactapp/src/context/AppContext';

function Homebase() {

  // const [isLoggedIn] = useContext(AppContext);

  return (
    <>
    <div style={{marginTop: '80px'}}></div>
    <div>
      <Switch>
        <Route path="/account" exact component={Account} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/home" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/notauthorized" exact component={NotAuthorized} />
        <Route path="/standings" exact component={Standings} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/games" exact component={Games} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/badges" exact component={Badges} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />
        {/* {if (isLoggedIn === false) <Route component={Home} />} */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
    </>
  )
}

export default Homebase
