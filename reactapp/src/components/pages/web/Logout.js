import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

import AppContext from '../../../context/AppContext';

function Logout() {

  const {setIsLoggedIn} = useContext(AppContext);

  useEffect(() => {
    setIsLoggedIn(false);
  });

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
