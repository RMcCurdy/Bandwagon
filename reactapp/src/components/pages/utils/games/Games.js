import React from 'react'
import GameDayHeader from './GameDayHeader';

function Games() {
  return (
    <div className="upcoming-games">
      <span className="upcoming-games-header">
        <h1>Upcoming Games</h1>
      </span>

      <GameDayHeader />

    </div>
  )
}

export default Games