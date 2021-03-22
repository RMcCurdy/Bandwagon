import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import { Redirect } from 'react-router-dom';

function Dashboard() {
  const {isAdmin} = useContext(AppContext);
  return isAdmin ? (
    <div>
      <p>This is the dashboard for Admin</p>
    </div>
    ) : (
      <Redirect to="/notauthorized" />
    );
}

export default Dashboard
