import React from 'react'

const LeaderboardItem = (props) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
  }

  return (
    <div className='leaderboard-items-container'>
      <div className='leaderboard-items'>
       {props.username}
      </div>
      <div className='leaderboard-items'>
        {numberWithCommas(props.pointsEarned)}
      </div>
      <div className='leaderboard-icons'>
        <img className='leaderboard-icons' src={'/img/profile-pics/' + props.favouriteTeam + '.svg'} alt="..." />
      </div>
    </div>
  )
}

export default LeaderboardItem
