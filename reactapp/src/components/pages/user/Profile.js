import React, { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router';

function Profile() {
    const {
        id,
        firstName,
        lastName,
        username,
        email,
        profilePic,
        topBadge,
        dateCreated,
        totalPointsBalance,
        totalPointsEarned,
        totalPointsSpent,
        setTopBadge,
    } = useContext(AppContext);

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Badges/${id}`).then((resp) => {
            console.log('top badge response is: ', resp.data);
            setTopBadge(resp.data.badgeImage);
        });
    }, [setTopBadge, id]);

    const redirectToEditProfile = () => {
        history.push('/editprofile');
    };

    return (
        <div className='profile'>
            <span className='profile-header'>
                <h1>Profile</h1>
                <button
                    onClick={redirectToEditProfile}
                    className='edit-profile-btn'
                    style={{
                        border: '2px solid #cec8c8',
                        borderRadius: '15px',
                        padding: '6px 8px 4px 8px',
                        boxShadow: '2px 4px 5px grey',
                        backgroundColor: '#f5efef',
                    }}>
                    Edit Profile
                </button>
            </span>

            <div className='profile-left'>
                <div className='user-profile-pic'>
                    <img
                        className='profile-pic'
                        src={`../../../img/profile-pics/${profilePic}.svg`}
                        alt='pic'></img>

                    <div className='username-and-badge'>
                        <p className='shown-username'>{username}</p>
                        <img
                            className='badge-pic'
                            src={`../../../img/badges/${topBadge}`}
                            alt='badge'></img>
                    </div>
                </div>

                <div className='user-info-container'>
                    <span className='profile-list-item'>
                        Name: {firstName} {lastName}
                    </span>
                    <p className='profile-list-item'>Email: {email}</p>
                    <p className='profile-list-item'>Since: {dateCreated}</p>
                </div>
            </div>

            <hr />

            <div className='user-stats-table'>
                <table className='stat-table' id='stats'>
                    <tbody>
                        <tr>
                            <td className='stats-header'>YOUR STATS</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>TOTAL POINTS EARNED</td>
                            <td className='stats-num'>{totalPointsEarned}</td>
                        </tr>
                        <tr>
                            <td className='stats-label stats-bottom-padding'>
                                TOTAL POINTS SPENT
                            </td>
                            <td className='stats-num stats-bottom-padding'>
                                {totalPointsSpent}
                            </td>
                        </tr>
                        <tr>
                            <td className='stats-label stats-num-line'>
                                POINTS BALANCE
                            </td>
                            <td className='stats-num stats-num-line'>
                                {totalPointsBalance}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Profile;
