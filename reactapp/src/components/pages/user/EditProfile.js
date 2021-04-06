import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router';
import SelectDropdownTeams from '../utils/SelectDropdownTeams';

const EditProfile = () => {

  const {id, firstName, setFirstName, lastName, setLastName, username, setUserName, email, setEmail, profilePic } = useContext(AppContext);

  const history = useHistory();

  const submitChangesHandler = () => {
    const userInfoToUpdate = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      profilePic: profilePic
    }
    axios.post(`http://localhost:5000/api/Accounts/profile`, userInfoToUpdate)
    history.push('/profile');
  }

  // useEffect(() => {
  //   axios.post(`http://localhost:5000/api/Badges/${id}`).then((resp) => {
  //       console.log('top badge response is: ', resp.data);
  //       setTopBadge(resp.data.badgeImage);
  //   });
  // }, [setTopBadge, id]);

  return (
    <div className="profile">
      <div>
        <h1>Edit Profile</h1>
        {/* Change first name */}
        
        <div className="edit-profile-main">
        <form>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="fname">First Name</label><br/>
            <input className="edit-profile-inputs" type="text" name="fname" value={firstName}
            onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="lname">Last Name</label><br/>
            <input className="edit-profile-inputs" type="text" name="lname" value={lastName}
            onChange={e => setLastName(e.target.value)}/>
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="uname">Username</label><br/>
            <input className="edit-profile-inputs" type="text" name="uname" value={username}
            onChange={e => setUserName(e.target.value)}/>
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="email">Email</label><br/>
            <input className="edit-profile-inputs" type="text" name="email" value={email}
            onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className='edit-profile-form'>
            <label className="edit-profile-label" htmlFor="favteam">Favourite Team</label><br/>
            <SelectDropdownTeams />
            {/* <input className="edit-profile-inputs" type="text" name="favteam" value={profilePic}
            onChange={e => setProfilePic(e.target.value)}/> */}
          </div>
          <div style={{paddingTop:'2rem'}}>
          </div>
          <button onClick={submitChangesHandler} className="edit-profile-submit">
            Save Changes
          </button>
          <div style={{paddingTop:'2rem'}}>
          </div>
        </form>
          </div>
        </div>
    </div>
  )
}

export default EditProfile
