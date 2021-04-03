import React, { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';

function Profile() {

    const {id, firstName, lastName, username, email, profilePic, topBadge, dateCreated, totalPointsBalance, totalPointsEarned, totalPointsSpent, setTopBadge} = useContext(AppContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Badges/${id}`).then((resp) => {
            console.log('top badge response is: ', resp.data);
            setTopBadge(resp.data.badgeImage);
        });
    }, [setTopBadge, id]);

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
                        <img className='badge-pic' src={`../../../img/badges/${topBadge}`} alt='badge' ></img> 
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
