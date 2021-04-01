import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';
import GameDayHeader from './GameDayHeader';

function Games() {

  const { gameDates, setGameDates, gameDate, setGameDate } = useContext(AppContext);

  useEffect(() => {
      axios.get('http://localhost:5000/api/Games/GameDates').then((resp) => {
          setGameDates(resp.data);
          setGameDate(resp.data[0]);
      });
  }, [setGameDates, setGameDate]);



  return (
    <div className="upcoming-games">
      <span className="upcoming-games-header">
        <h1>Upcoming Games</h1>
      </span>

        {/* insert date */}
        <div className="game-day dropdown-container">
          <label for="dates">April</label>

          <select className="dropdown-box" name="dates" onChange={(e) => setGameDate(e.target.value)}>
          <option>--Select Date--</option>
          {gameDates[0] ? (
            gameDates.map((row) => {
                return (
                  <option value={`${row.gameDate}`}>{row.gameDate}</option>
                );
            })
        ) : (
            <p>loading...</p>
        )}
          </select>
        </div>
        <div className="games-grid">
        {gameDate > 0 ? <GameDayHeader gameDate={gameDate} /> : <p style={{marginLeft: '-2em', justifyContent: 'flex-start'}}>Please select a date from the dropdown</p>}
        </div>

    </div>
  )
}

export default Games