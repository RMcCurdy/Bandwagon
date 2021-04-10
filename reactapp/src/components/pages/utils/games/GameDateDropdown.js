import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameDateDropdown = (props) => {
    // const { gameDates, setGameDates, setGameDate } = useContext(AppContext);

    const [dropdownDates, setDropdownDates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Games/GameDates').then((resp) => {
            console.log(
                'GameDateDropdown > useEffect > resp.data is: ',
                resp.data,
            );
            if (dropdownDates.length === 0) {
                setDropdownDates(resp.data);
            }
        });
    }, [dropdownDates, setDropdownDates]);

    return (
        <div
            style={{
                width: '300px',
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <span className='upcoming-games-header'>
                <h1>Upcoming Games</h1>
            </span>

            {/* insert date */}
            <div className='game-day dropdown-container'>
                <label htmlFor='dates'>April</label>
                {/* <p>gameDates</p>
                <pre>{gameDates}</pre> */}

                {dropdownDates ? (
                    <select
                        className='dropdown-box'
                        name='dates'
                        onChange={(e) => {
                            if (e.target.value !== 'select') {
                                console.log(
                                    'this is the selected date: ',
                                    e.target.value,
                                );
                                props.handleGameDateSelect(e.target.value);
                            } else {
                                props.handleGameDateSelect([]);
                            }
                        }}>
                        <option key={10000} value={'select'}>
                            --Select Date--
                        </option>
                        {dropdownDates.map((row, idx) => {
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
        </div>
    );
};

export default GameDateDropdown;
