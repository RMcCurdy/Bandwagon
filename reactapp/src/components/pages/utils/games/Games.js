import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';
import GameDayHeader from './GameDayHeader';

function Games() {
    const { gameDates, setGameDates, gameDate, setGameDate } = useContext(
        AppContext,
    );

    useEffect(() => {
        axios.get('http://localhost:5000/api/Games/GameDates').then((resp) => {
            setGameDates(resp.data);
            setGameDate(resp.data[0]);
        });
    }, [setGameDates, setGameDate]);

    return (
        <div className='upcoming-games'>
            <span className='upcoming-games-header'>
                <h1>Upcoming Games</h1>
            </span>

            {/* insert date */}
            <div className='game-day dropdown-container'>
                <label htmlFor='dates'>April</label>

                {gameDates[0] ? (
                    <select
                        className='dropdown-box'
                        name='dates'
                        onChange={(e) => {
                            if (e.target.value !== 'select') {
                                console.log(
                                    'Selected date is: ',
                                    e.target.value,
                                );
                                setGameDate(e.target.value);
                            } else {
                                setGameDate([]);
                            }
                        }}>
                        <option key={10000} value={'select'}>
                            --Select Date--
                        </option>
                        {gameDates.map((row, idx) => {
                            return (
                                <option key={idx} value={`${row.gameDate}`}>
                                    {row.gameDate}
                                </option>
                            );
                        })}
                    </select>
                ) : (
                    <p>loading...</p>
                )}
            </div>
            <div className='games-grid'>
                {gameDate > 0 ? (
                    <GameDayHeader gameDate={gameDate} />
                ) : (
                    <p
                        style={{
                            marginLeft: '-2em',
                            justifyContent: 'flex-start',
                        }}>
                        Please select a date from the dropdown
                    </p>
                )}
            </div>
        </div>
    );
}

export default Games;
