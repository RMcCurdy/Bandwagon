import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AppContext from '../../../context/AppContext';

const Login = () => {
  const {globalState, setGlobalState} = useContext(AppContext);
  
  const history = useHistory();

  const login = () => {

    const loginTestPerson = {
      email: 'robert@test.com',
      password: '1111'
    };
    return axios.post('http://localhost:5000/api/Auth', loginTestPerson)
    .then(resp => {
      const success = resp.data.success;
      console.log(success);
      if (success === true) {
        console.log('the global state is: ', globalState);
        setGlobalState.isLoggedIn = true;
        setGlobalState.isAdmin = false;
        setGlobalState.firstname = resp.data.firstname;
        setGlobalState.username = resp.data.username;
        console.log('the UPDATED global state is: ', globalState)
        history.push('/account');
      }
      console.log('response is: ', resp);
    });
  } 

  return (
    <div className="my-flex-container">
      <div>
        <h1>Login</h1>
        <p>Hello {globalState.isLoggedIn ? <p>You are already logged in.  Taking you to your Account page...</p> : <p>Please log in below.</p>} </p>
        
        <div className="main">
          <p className="sign">Sign in</p>
          <form className="form1" />
          <div>
          <input className="un" type="text" placeholder="Username" />
          </div>
          <div>
          <input className="pass" type="password" placeholder="Password" />
          </div>
          <div>
          <a className="submit">Sign in</a>
          <button onClick={login}>
            Click Me
          </button>
          </div>
          <div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
