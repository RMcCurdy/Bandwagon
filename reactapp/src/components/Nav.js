import React, { useContext } from 'react'
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";

import AppContext from '../context/AppContext';

function Nav() {
  const {isLoggedIn} = useContext(AppContext);

  const logoAndWebName = <span className="app-name-header header-title">
  <img className="logo" src="../img/orange.png" alt="Product Logo" />Bandwagon
  </span>

  const notLoggedInTabs = <span className="tabs center-tabs"> 
  <Link to="/" className="nav-tabs">HOME</Link>
  <Link to="/leaderboard" className="nav-tabs">LEADERBOARD</Link>
  <Link to="/standings" className="nav-tabs">STANDINGS</Link> 
  </span> 

  const loggedInTabs = <span className="tabs center-tabs">
  <Link to="/account" className="nav-tabs">HOME</Link>
  <Link to="/shop" className="nav-tabs">SHOP</Link>
  <Link to="/badges" className="nav-tabs">BADGES</Link>
  <Link to="/games" className="nav-tabs">GAMES</Link>
  <Link to="/leaderboard" className="nav-tabs">LEADERBOARD</Link>
  <Link to="/standings" className="nav-tabs">STANDINGS</Link> 
  <Link to="/profile" className="nav-tabs">PROFILE</Link>
  </span>

  const notLoggedIn = <ul className="nav-list login-logout">
  <li><span><Link to="/login" className="btn login">SIGN IN</Link></span></li>
  <li><span><Link to="/signup" className="btn signup">SIGN UP</Link></span></li>
  </ul>

  const loggedIn = <ul className ="nav-list login-logout">
  <li><Link to="/logout" className="btn login">SIGN OUT</Link></li>
  </ul>

  return (
    <>
    <header className="full-screen-header">
      <nav className="nav nav-top">
        {logoAndWebName}
        {isLoggedIn ? loggedInTabs : notLoggedInTabs}
        {isLoggedIn ? loggedIn : notLoggedIn}
        {/* {isLoggedIn ? <p>True</p> : <p>False</p>} */}
      </nav>
    </header>
    </>
  )
}

export default Nav
