import React from 'react'
import GameDayHeader from './GameDayHeader';

function Games() {
  return (
    <div className="upcoming-games">
      <span className="upcoming-games-header">
        <h1>Upcoming Games</h1>
      </span>

        <div className="games-grid">
          <GameDayHeader />
        </div>

    </div>
  )
}

export default Games