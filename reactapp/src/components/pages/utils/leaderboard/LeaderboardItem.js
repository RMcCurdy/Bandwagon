import React from 'react'

const LeaderboardItem = (props) => {
  return (
    <div className='leaderboard-items-container'>
      <div className='leaderboard-items'>
       {props.username}
      </div>
      <div className='leaderboard-items'>
        {props.pointsEarned}
      </div>
      <div className='leaderboard-items'>
        {props.favouriteTeam}
      </div>
    </div>
  )
}

export default LeaderboardItem
