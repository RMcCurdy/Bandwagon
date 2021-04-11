import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import GameDateDropdown from '../utils/games/GameDateDropdown';
import AdminScoreItemList from './AdminScoreItemList';

const AdminScoreContainer = () => {
    const { id, gameData, setGameData, gameDate, setGameDate } = useContext(
        AppContext,
    );
    // const { id } = useContext(AppContext);
    // local
    // const [dropdownDate, setDropdownDate] = useState(0);
    // const [localgameData, setLocalGameData] = useState([]);
    const testGameData = [...gameData];

    const handleGameDateSelect = (gameDateInt) => {
        console.log(
            'AdminScoreContainer > handleGameDataSelect > Admin selected this date from the child dropdown: ',
            gameDateInt,
        );
        setGameDate(gameDateInt);
    };

    useEffect(() => {
        if (gameDate > 0) {
            axios
                .get(`http://localhost:5000/api/Games/${gameDate}/${id}`)
                .then((resp) => {
                    console.log(
                        'AdminScoreContainer > handleGameDateSelected > gameData response is: ',
                        resp,
                    );
                    setGameData(resp.data);
                });
        }
    }, [gameDate, id, setGameData]);

    return (
        <div
            style={{
                // justifyContent: 'center',
                // alignItems: 'center',
                width: '800px',
                margin: '0 auto',
                border: '2px solid purple',
                borderRadius: '1.5rem',
                padding: '1em',
                // margin: '6em',
            }}>
            <h4>Hello Admin, select a Date, then update the scores.</h4>
            <GameDateDropdown handleGameDateSelect={handleGameDateSelect} />
            <div>
                {gameData.length > 0 ? (                  
                    <AdminScoreItemList />
                ) : (
                    <p>Please select a date above.</p>
                )}
            </div>
        </div>
    );
};

export default AdminScoreContainer;
