import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';

function Profile() {

    return (
        <div className='profile'>
            
            <span className='profile-header'>
                <h1>Profile</h1>
                <button className='edit-profile-btn'>Edit Profile</button>  
            </span>

            <div className='profile-left'>

                <div className='user-profile-pic'>

                    <img className='profile-pic' src='../../../img/badges-test/profile-pic.png' alt='pic' ></img>

                    <div className='username-and-badge'>
                        <p className='shown-username'>IamYaoMing</p>
                        <img className='badge-pic' src='../../../img/badges-test/current-badge.png' alt='badge' ></img> 
                    </div>

                </div>

                <div className='user-info'>

                    <p className='profile-list-item'>Name: IamYaoMing</p>
                    <p className='profile-list-item'>Email: yaoyao@email.com</p>
                    <p className='profile-list-item'>Created: February 31, 2000</p>

                </div>

            </div>

            <hr/>

            <div className='user-stats-table'>
                <table className='stat-table' id='stats'>
                    <tbody>
                    <p className='stats-header'>YOUR STATS</p>
                        <tr>
                            <td className='stats-label'>POINTS BALANCE</td>
                            <td className='stats-num'>6,245</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>TOTAL POINTS EARNED</td>
                            <td className='stats-num'>11,245</td>
                        </tr>
                        <tr>
                            <td className='stats-label'>TOTAL POINTS SPENT</td>
                            <td className='stats-num'>5,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

        </div>
    )
}

export default Profile
