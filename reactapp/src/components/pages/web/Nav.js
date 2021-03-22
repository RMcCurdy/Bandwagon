import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import {Link} from "react-router-dom";


function Nav() {
  const {isLoggedIn, setIsLoggedIn, isAdmin, firstname} = useContext(AppContext);

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
  </span>

  const loggedInAdminTabs = <span className="tabs center-tabs">
  <Link to="/dashboard" className="nav-tabs">ADMIN DASHBOARD</Link>
  </span>

  
  const notLoggedIn = <div style={{minWidth: '400px'}}>
  <ul className="nav-list login-logout">
  <li><span><Link to="/login" className="btn login">SIGN IN</Link></span></li>
  <li><span><Link to="/signup" className="btn signup">SIGN UP</Link></span></li>
  </ul>
  </div>

  const loggedIn = <div style={{minWidth: '400px'}}>
  <ul className ="nav-list login-logout">
  <Link to="/profile" className="nav-tabs">Hello, {firstname}</Link>
  <li><Link to="/logout" className="btn login">SIGN OUT</Link></li>
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
