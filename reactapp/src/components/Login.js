import React, { useContext } from 'react'

import AppContext from '../context/AppContext';

const Login = () => {
  const {isLoggedIn} = useContext(AppContext);

  const myStyle = {
    // width: '600px', 
    // borderRadius: '15px',
    // border: '2px solid #fff'
  }
  
  return (
    <div className="my-flex-container">
      <div style={myStyle}>
        <h1>Login</h1>
        <p>Hello {isLoggedIn ? <p>You are already logged in.  Taking you to your Account page...</p> : <p>Please log in below.</p>} </p>
        
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
