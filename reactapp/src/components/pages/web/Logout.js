import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

import AppContext from '../../../context/AppContext';

function Logout() {

  const {setIsLoggedIn, setId, setFirstName, setLastName, setUserName, setEmail, setProfilePic, setIsAdmin, setTotalPointsEarned, setTotalPointsSpent, setTotalPointsBalance, setTeams, setGameDates, setGameData} = useContext(AppContext);
  
  useEffect(() => {
    setId('');
    setFirstName('');
    setLastName('');
    setUserName('');
    setEmail('');
    setProfilePic('');
    setIsAdmin(false);
    setTotalPointsBalance(0);
    setTotalPointsEarned(0);
    setTotalPointsSpent(0);
    setTeams([]);
    setGameDates([]);
    setGameData([]);
    setIsLoggedIn(false);
  }, [setIsLoggedIn, setId, setFirstName, setLastName, setUserName, setEmail, setProfilePic, setIsAdmin, setTotalPointsEarned, setTotalPointsSpent, setTotalPointsBalance, setTeams, setGameDates, setGameData]);

  return (
    <div className="page-container">
      <div>
        <h2>You are now logged out.</h2>
      </div>
      <br />
      <div>
        <Link to="/home" className="nav-tabs">Go to Home</Link>
      </div>
    </div>
  )
}

export default Logout
