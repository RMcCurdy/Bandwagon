import React from 'react'

function Profile() {
  return (
    <div className='profile'>
      <span className="profile-header">
        <h1>Profile</h1>
        <button className="edit-profile-btn">Edit Profile</button>  
      </span>

      <div className='profile-info'>
        <img className="profile-pic" src="../../../img/badges-test/profile-pic.png" alt='profPic'></img>
        <div>
          <p className='profile-title'>My Information</p>
          <p className='profile-details'>Username</p>
          <p className='profile-details'>Email</p>

          <p className='profile-title'>My Stats</p>
          <p className='profile-details'>Points Balance</p>
          <p className='profile-details'>Total Points Earned</p>
          <p className='profile-details'>Total Points Spent</p>
          <p className='profile-details'>Total Badges Earned</p>
        </div>
      </div>

    </div>
  )
}

export default Profile
