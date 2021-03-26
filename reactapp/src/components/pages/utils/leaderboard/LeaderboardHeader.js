import React from 'react'

const LeaderboardHeader = () => {
  return (
    <div>
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
    </div>
  )
}

export default LeaderboardHeader
