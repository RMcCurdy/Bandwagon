import React from 'react'
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Home from './Home';
import Account from './Account';
import Login  from './Login';

function Homebase() {
  return (
    <>
    <div style={{marginTop: '80px'}}></div>
    <div>
      <Switch>
        <Route path="/account" exact component={Account} />
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
    </>
  )
}

export default Homebase
