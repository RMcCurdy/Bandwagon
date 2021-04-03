import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

function Profile() {

    const {firstName, lastName, username, email, profilePic, dateCreated, totalPointsBalance, totalPointsEarned, totalPointsSpent} = useContext(AppContext);

    return (
        <div className='profile'>
            
            <span className='profile-header'>
                <h1>Profile</h1>
                <button className='edit-profile-btn'>Edit Profile</button>  
            </span>

            <div className='profile-left'>

                <div className='user-profile-pic'>

                    <img className='profile-pic' src={`../../../img/profile-pics/${profilePic}`} alt='pic' ></img>

                    <div className='username-and-badge'>
                        <p className='shown-username'>{username}</p>
                        <img className='badge-pic' src='../../../img/badges-test/current-badge.png' alt='badge' ></img> 
                    </div>

                </div>

                <div className='user-info'>

                    <p className='profile-list-item'>Name: {firstName} {lastName}</p>
                    <p className='profile-list-item'>Email: {email}</p>
                    <p className='profile-list-item'>Created: {dateCreated}</p>

                </div>

            </div>

            <hr/>

            <div className='user-stats-table'>

                <table className='stat-table' id='stats'>

                    <tbody>

                        <tr>
                            <td className='stats-header'>YOUR STATS</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>POINTS BALANCE</td>
                            <td className='stats-num'>{totalPointsBalance}</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>TOTAL POINTS EARNED</td>
                            <td className='stats-num'>{totalPointsEarned}</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>TOTAL POINTS SPENT</td>
                            <td className='stats-num'>{totalPointsSpent}</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Profile
