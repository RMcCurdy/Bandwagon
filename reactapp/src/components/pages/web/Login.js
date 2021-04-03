import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns'

import AppContext from '../../../context/AppContext';

const Login = () => {
  const {setId, setFirstName, setLastName, setUserName, setEmail, setIsLoggedIn, setProfilePic, setDateCreated, setIsAdmin, setTotalPointsBalance, setTotalPointsEarned, setTotalPointsSpent} = useContext(AppContext);
  
  const history = useHistory();

  const login = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const loginPerson = {
      email: email,
      password: pass
    };
    //TODO need to delete this for final version
    const loginPersonUser = {
      email: 'robert@test.com',
      password: '1111'
    };
    const loginPersonAdmin = {
      email: 'admin@test.com',
      password: '1111'
    };

    return axios.post('http://localhost:5000/api/Auth', loginPersonUser)
    .then(resp => {
      const success = resp.data.success;
      console.log(success);
      if (success === true) {
        const userId = resp.data.id;
        const fname = resp.data.firstName;
        const lname = resp.data.lastName;
        const uname = resp.data.username;
        const email = resp.data.email;
        const dateCreated = resp.data.dateCreated;
        const profilePic = resp.data.profilePic;
        const totalPointsEarned = resp.data.totalPointsEarned;
        const totalPointsSpent = resp.data.totalPointsSpent;
        const totalPointsBalance = resp.data.totalPointsBalance;
        const isAdmin = resp.data.isAdmin;

        setId(userId);
        setFirstName(fname);
        setLastName(lname);
        setUserName(uname);
        setEmail(email);
        setProfilePic(profilePic);
        setIsLoggedIn(true);
        setIsAdmin(isAdmin);
        setTotalPointsEarned(totalPointsEarned);
        setTotalPointsSpent(totalPointsSpent);
        setTotalPointsBalance(totalPointsBalance);
        
        const formattedDate = format(new Date(dateCreated), 'MMMM dd, yyyy');
        setDateCreated(formattedDate);

        if (isAdmin === true) {
          history.push('/admin');
        } else {
          history.push('/account');
        }
    }
      console.log('response is: ', resp);
    });
  } 

  return (
    <div className="my-flex-container">
      <div>
        <h1>Login</h1>
        {/* Change first name */}
        
        <div className="main">
          <p className="sign">Sign in</p>
          <form className="form1" />
          <div>
          <input id="email" className="un" type="text" placeholder="Email" />
          </div>
          <div>
          <input id="pass" className="pass" type="password" placeholder="Password" />
          </div>
          <div>
          <button onClick={login} className="submit">
            Sign In
          </button>
          </div>
          <div>
          <p className="forgot"><Link to='/forgot'>Forgot Password?</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
