import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router';

const SignUp = () => {

  const {setId, setFirstName, setLastName, setUserName, setEmail, setIsLoggedIn, setProfilePic} = useContext(AppContext);
  
  const history = useHistory();

  const helloHandler = () => {
    console.log("hello");
  }

  const signUpHandler = () => {
   
    // const fname = document.getElementById('fname').value;
    // const lname = document.getElementById('lname').value;
    // const uname = document.getElementById('uname').value;
    // const eml = document.getElementById('eml').value;
    // const pass = document.getElementById('pass').value;
    // const fav = document.getElementById('fav').value;

    // const signUpDataToPost = {
    //   firstName: fname,
    //   lastName: lname,
    //   username: uname,
    //   email: eml,
    //   password: pass,
    //   profilePic: fav
    // }

    const signUpDataToPost2 = {
      firstName: 'j',
      lastName: 's',
      username: 'uname',
      email: 'eml',
      password: 'pass',
      profilePic: 'fav'
    }

    console.log('signUpDataToPost is: ', signUpDataToPost2);


    axios.post('http://localhost:5000/api/Accounts/signup', signUpDataToPost2)
    .then(resp => {
      const success = resp.data.success;
      console.log(success);
      if (success === true) {
        const userId = resp.data.id;
        const fname = resp.data.firstName;
        const lname = resp.data.lastName;
        const uname = resp.data.username;
        const email = resp.data.email;
        const profilePic = resp.data.profilePic;

        setId(userId);
        setFirstName(fname);
        setLastName(lname);
        setUserName(uname);
        setEmail(email);
        setProfilePic(profilePic);
        setIsLoggedIn(true);
    }
      console.log('response is: ', resp);
      history.push('/account');
    })
  }

  return (
    <div className="profile">
      <div>
        <h1>Sign Up</h1>
        {/* Change first name */}
        
        <div className="edit-profile-main">
        <form>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="fname">First Name</label><br/>
            <input className="edit-profile-inputs" id="fname" type="text" name="fname" />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="lname">Last Name</label><br/>
            <input className="edit-profile-inputs" id="lname" type="text" name="lname" />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="uname">Username</label><br/>
            <input className="edit-profile-inputs" id="uname" type="text" name="uname" />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="email">Email</label><br/>
            <input className="edit-profile-inputs" id="eml" type="text" name="email" />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="pword">Password</label><br/>
            <input className="edit-profile-inputs" id="pass" type="password" name="pword" />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="favteam">Favourite Team</label><br/>
            <input className="edit-profile-inputs" id="fav" type="text" name="favteam" />
          </div>
          <div style={{paddingTop:'2rem'}}>
          </div>
          <button onClick={helloHandler} className="edit-profile-submit">
            Sign Up
          </button>
          <div style={{paddingTop:'2rem'}}>
          </div>
        </form>
        </div>

      </div>
    </div>
  )
}

export default SignUp
