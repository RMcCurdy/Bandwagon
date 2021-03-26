import React from 'react'
import LeaderboardList from './LeaderboardList';
import LeaderboardHeader from './LeaderboardHeader';

function Leaderboard() {

  return (
    <div>
      <div className="leaderboard">
      <LeaderboardHeader />
      <LeaderboardList />
     
      </div>
    </div>
  )
}

export default Leaderboard
