import React from 'react'
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";


function Nav() {
  return (
    <>
    <header class="full-screen-header">
      <nav class="nav nav-top">
        <span class="app-name-header">
          <img class="logo" src="../img/orange.png" alt="Product Logo" />Bandwagon
        </span>
        <span class="tabs">
          <Link to="/" className="nav-tabs nav-tabs-home">HOME</Link>
          <Link to="/leaderboard" className="nav-tabs nav-tabs-home">LEADERBOARD</Link>
          <Link to="/standings" className="nav-tabs nav-tabs-home">STANDINGS</Link>
          <Link to="/account" className="nav-tabs nav-tabs-account">ACCOUNT</Link>
          <Link to="/shop" className="nav-tabs nav-tabs-account">SHOP</Link>
          <Link to="/badges" className="nav-tabs nav-tabs-account">BADGES</Link>
          <Link to="/games" className="nav-tabs nav-tabs-account">GAMES</Link>
          <Link to="/profile" className="nav-tabs nav-tabs-account">PROFILE</Link>
        </span>
        <ul class="nav-list">
          <li><Link to="/login" className="btn login">LOG IN</Link></li>
          <li><Link to="/signup" className="btn signup">SIGN UP</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Nav
