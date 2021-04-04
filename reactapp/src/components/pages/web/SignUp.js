import React, { useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router';

const SignUp = () => {
    const { setId, setFirstName, setLastName, setUserName, setEmail, setIsLoggedIn, setProfilePic, setIsAdmin, setTotalPointsEarned, setTotalPointsSpent, setTotalPointsBalance } = useContext(AppContext);

    const newUserUbject = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        profilePic: '',
    };
    
    const [newUser, setNewUser] = useState(newUserUbject);

    const history = useHistory();

    const signUpHandler = (e) => {
        e.preventDefault();

        const signUpDataToPost = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            profilePic: newUser.profilePic,
        };

        console.log('signUpDataToPost is: ', signUpDataToPost);

        return axios
            .post('http://localhost:5000/api/accounts/signup', signUpDataToPost)
            .then((resp) => {
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
                    setIsAdmin(false);
                    setTotalPointsEarned(0);
                    setTotalPointsSpent(0);
                    setTotalPointsBalance(0);
                }
                console.log('response is: ', resp);
                history.push('/account');
            });
    };

    return (
        <div className='profile'>
            <div>
                <h1>Sign Up</h1>
                <div className='edit-profile-main'>
                    <form onSubmit={signUpHandler}>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='fname'>First Name</label>
                            <br />
                            <input className='edit-profile-inputs' id='fname' type='text' name='fname' value={newUser.firstName}
                                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
                        </div>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='lname'>Last Name</label>
                            <br />
                            <input className='edit-profile-inputs' id='lname' type='text' name='lname' value={newUser.lastName}
                                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
                        </div>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='uname'>Username</label>
                            <br />
                            <input className='edit-profile-inputs' id='uname' type='text' name='uname' value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                        </div>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='email'>Email</label>
                            <br />
                            <input className='edit-profile-inputs' id='eml' type='text' name='email' value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        </div>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='pword'>Password</label>
                            <br />
                            <input className='edit-profile-inputs' id='pass' type='password'name='pword' value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                        </div>

                        <div className='edit-profile-form'>
                            <label className='edit-profile-label' htmlFor='favteam'>Favourite Team</label>
                            <br />
                            <input className='edit-profile-inputs' id='fav' type='text' name='favteam' value={newUser.profilePic}
                                onChange={(e) => setNewUser({ ...newUser, profilePic: e.target.value })} />
                        </div>

                        <div style={{ paddingTop: '2rem' }}></div>

                        <button type='submit' className='edit-profile-submit'>
                            Sign Up
                        </button>

                        <div style={{ paddingTop: '2rem' }}></div>

                    </form>
                    <pre>{JSON.stringify(newUser, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
