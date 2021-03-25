import React, { useEffect } from 'react'
import LeaderboardItem from './LeaderboardItem';
import axios from 'axios';


const LeaderboardList = () => {
  
  let leaderboardData = []
  
  useEffect(() => {
    // Run! Like go get some data from an API.
    getLeaderboardData()
  });

  // leaderboardData = [
    //     {
  //       id: 1,
  //       username: 'Luigi1',
  //       pointsEarned: '100',
  //       profilePic: 'Suns'
  //     },
  //     {
  //       id: 2,
  //       username: 'Yoshi1',
  //       pointsEarned: '200',
  //       profilePic: 'Lakers'
  //     },
  //     {
  //       id: 3,
  //       username: 'Kirby1',
  //       pointsEarned: '300',
  //       profilePic: 'Celtics'
  //     }
  // ]

  const getLeaderboardData = () => {
    return axios.get('http://localhost:5000/api/Leaderboard')
    .then(resp => {
      // const id = resp.data.id;
      // const username = resp.data.firstName;
      // const pointsEarned = resp.data.username;
      // const profilePic = resp.data.profilePic;
      leaderboardData = resp.data;
      console.log('leaderboard response is: ', resp);
    });
  }


  const createLeaderboardItems = () => {
    return leaderboardData.map((leaderboardData) => 
      <LeaderboardItem key={leaderboardData.id} username={leaderboardData.username} pointsEarned={leaderboardData.pointsEarned} favouriteTeam={leaderboardData.profilePic} />
    );
  }


  return (
    <div style={{border:'2px solid red'}}>
      <span className="leaderboard-header">
      <h1>Leaderboard</h1>
      </span>

      <div className='leaderboard-header-container'>
        <div className='leaderboard-header-items'>
          Username
        </div>
        <div className='leaderboard-header-items'>
          Points Earned
        </div>
        <div className='leaderboard-header-items'>
          Favourite Team
        </div>
      </div>
      
      {createLeaderboardItems()}
      
    </div>
  )
}

export default LeaderboardList
