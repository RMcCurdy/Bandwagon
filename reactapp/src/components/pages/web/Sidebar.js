import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import { BsJustify } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  

  const { isLoggedIn, isAdmin, showSidebar, setShowSidebar } = useContext(AppContext);

  function toggleSidebar() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  const tabsToShow = () => {
    if (isLoggedIn && !isAdmin) {
      return loggedInTabs
    } else if (isLoggedIn && isAdmin) {
      return loggedInAdminTabs
    } else {
      return notLoggedInTabs
    }
  }

  const loggedInTabs = <div>
  <BsJustify className={'sidebar-button-show'} size={40} color={'white'} style={{border:'2px solid white', borderRadius:'5px'}} onClick={toggleSidebar}/>
  <nav id="dropdown" class="dropdown">
    <ul class="tabs-list-sidebar">
      <li><NavLink to="/account" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>HOME</NavLink></li>
      <li><NavLink to="/shop" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>SHOP</NavLink></li>
      <li><NavLink to="/badges" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>BADGES</NavLink></li>
      <li><NavLink to="/games" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>GAMES</NavLink></li>
      <li><NavLink to="/leaderboard" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>LEADERBOARD</NavLink></li>
      <li><NavLink to="/profile" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>MY PROFILE</NavLink></li>
      <li><NavLink to="/logout" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>SIGN OUT</NavLink></li>
    </ul>
  </nav>
  </div>

  const loggedInAdminTabs = <div>
  <BsJustify className={'sidebar-button-show'} size={40} color={'white'} style={{border:'2px solid white', borderRadius:'5px'}} onClick={toggleSidebar}/>
  <nav id="dropdown" class="dropdown">
    <ul class="tabs-list-sidebar">
      <li><NavLink to="/admin" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>ADMIN DASHBOARD</NavLink></li>
      <li><NavLink to="/profile" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>MY PROFILE</NavLink></li>
      <li><NavLink to="/logout" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>SIGN OUT</NavLink></li>
    </ul>
  </nav>
  </div>

  const notLoggedInTabs = <div>
  <BsJustify className={'sidebar-button-show'} size={40} color={'white'} style={{border:'2px solid white', borderRadius:'5px'}} onClick={toggleSidebar}/>
  <nav id="dropdown" class="dropdown">
    <ul class="tabs-list-sidebar">
      <li><NavLink to="/home" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>HOME</NavLink></li>
      <li><NavLink to="/leaderboard" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>LEADERBOARD</NavLink></li>
      <li><NavLink to="/login" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>SIGN IN</NavLink></li>
      <li><NavLink to="/signup" className="nav-btn-sidebar btn" activeClassName="active" onClick={toggleSidebar}>SIGN UP</NavLink></li>
    </ul>
  </nav>
  </div>

  return (
    <>
      {tabsToShow()}
    </>
  )
}

export default Sidebar
