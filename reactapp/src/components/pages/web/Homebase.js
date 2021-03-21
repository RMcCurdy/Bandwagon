import React from 'react'
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Home from './Home';
import Account from '../user/Account';
import Login  from './Login';
import Dashboard from '../admin/Dashboard';
import PageNotFound from '../shared/PageNotFound';
import NotAuthorized from '../shared/NotAuthorized';

function Homebase() {
  return (
    <>
    <div style={{marginTop: '80px'}}></div>
    <div>
      <Switch>
        <Route path="/account" exact component={Account} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/notauthorized" exact component={NotAuthorized} />
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    </>
  )
}

export default Homebase
