import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const {isAdmin} = useContext(AppContext);

  const reCalculateHandler = () => {
    axios.get('http://localhost:5000/api/Recalc').then((resp) => {
      console.log('recalc response is: ', resp.data);
    });
  }

  return isAdmin ? (
    <div>
      <button onClick={reCalculateHandler} className='login btn' style={{fontFamily:'inherit'}}>Re-calculate Game Win Percentage</button>
    </div>
    ) : (
      <Redirect to="/notauthorized" />
    );
}

export default Admin
