import React from 'react'
import { Link } from "react-router-dom";

function NotAuthorized() {
  return (
    <div>
      <p>You are not authorized to view this page.</p>
      <Link to="/home" className="nav-tabs">Go to Home</Link>
    </div>
  )
}

export default NotAuthorized
