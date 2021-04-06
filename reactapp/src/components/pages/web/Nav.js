import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import { NavLink } from "react-router-dom";


function Nav() {
  const {isLoggedIn, isAdmin, firstName} = useContext(AppContext);

  const logoAndWebName = <span className="app-name-header header-title">
  <img className="logo" src="../img/orange.png" alt="Product Logo" />Bandwagon
  </span>

  const notLoggedInTabs = <span className="tabs center-tabs"> 
  <NavLink to="/home" className="nav-tabs" activeClassName="active">HOME</NavLink>
  <NavLink to="/leaderboard" className="nav-tabs" activeClassName="active">LEADERBOARD</NavLink>
  </span> 

  const loggedInTabs = <span className="tabs center-tabs">
  <NavLink to="/account" className="nav-tabs" activeClassName="active">HOME</NavLink>
  <NavLink to="/shop" className="nav-tabs" activeClassName="active">SHOP</NavLink>
  <NavLink to="/badges" className="nav-tabs" activeClassName="active">BADGES</NavLink>
  <NavLink to="/games" className="nav-tabs" activeClassName="active">GAMES</NavLink>
  <NavLink to="/leaderboard" className="nav-tabs" activeClassName="active">LEADERBOARD</NavLink>
  </span>

  const loggedInAdminTabs = <span className="tabs center-tabs">
  <NavLink to="/admin" className="nav-tabs" activeClassName="active">ADMIN DASHBOARD</NavLink>
  </span>

  
  const notLoggedIn = <div style={{minWidth: '400px'}}>
  <ul className="nav-list login-logout">
  <li><span><NavLink to="/login" className="btn login" activeClassName="active">SIGN IN</NavLink></span></li>
  <li><span><NavLink to="/signup" className="btn signup" activeClassName="active">SIGN UP</NavLink></span></li>
  </ul>
  </div>

  const loggedIn = <div style={{minWidth: '400px'}}>
  <ul className ="nav-list login-logout">
  <NavLink to="/profile" className="nav-tabs" activeClassName="active">Hello, {firstName}</NavLink>
  
  <li><NavLink to="/logout" className="btn login" activeClassName="active">SIGN OUT</NavLink></li>
  </ul>
  </div>

  const tabsToShow = () => {
    if (isLoggedIn && !isAdmin) {
      return loggedInTabs
    } else if (isLoggedIn && isAdmin) {
      return loggedInAdminTabs
    } else {
      return notLoggedInTabs
    }
  }

  return (
    <>
    <header className="full-screen-header">
      <nav className="nav nav-top">
        {logoAndWebName}
        {tabsToShow()}
        {/* Global Sign in/Sign out */}
        {isLoggedIn ? loggedIn : notLoggedIn}
      </nav>
    </header>
    </>
  )
}

export default Nav
