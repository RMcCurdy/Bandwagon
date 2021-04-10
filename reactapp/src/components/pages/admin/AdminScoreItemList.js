import React, { useEffect, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import AdminScoreItem from './AdminScoreItem';

const AdminScoreItemList = (props) => {
    const { id, gameData, setGameData, gameDate } = useContext(AppContext);

    const handleSaveScores = () => {
        console.log('starting to save game data...');

        // save
        axios
            .post(`http://localhost:5000/api/Games/savescores`, gameData)
            .then((resp) => {
                console.log('AdminScoreList > games response is: ', resp.data);
                // setGameData(resp.data);
            });
    };

    // handleGameDataUpdate() {

    // }

    // useEffect(() => {
    //     if (gameData > 0) {
    //         axios
    //             .get(`http://localhost:5000/api/Games/v2/${gameDate}/${id}`)
    //             .then((resp) => {
    //                 console.log(
    //                     'AdminScoreList > games response is: ',
    //                     resp.data,
    //                 );
    //                 if (gameData === []) {
    //                     setGameData(resp.data);
    //                 }
    //             });
    //     }
    // }, [id, gameData, setGameData, gameDate]);

    return (
        <>
            <p>JSON game data is:</p>
            <pre>{JSON.stringify({ gameData })}</pre>
            <div
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '600px',
                    margin: '0 auto',
                    border: '2px solid blue',
                    borderRadius: '1.5rem',
                    padding: '0em',
                    // margin: '6em',
                }}>
                <div>
                    {gameData ? (
                        gameData.map((row, idx) => {
                            return (
                                // <p>individual games will loop here</p>
                                <AdminScoreItem
                                    key={idx}
                                    objId={idx}
                                    gameId={row.id}
                                    gameDate={row.gameDate}
                                    gameTime={row.gameTime}
                                    homeTeamId={row.homeTeamId}
                                    visitorTeamId={row.visitorTeamId}
                                    homeWinPercent={row.homePercent}
                                    visitorWinPercent={row.visitorPercent}
                                    homeFinalScore={row.homeFinalScore}
                                    visitorFinalScore={row.visitorFinalScore}
                                    homeTeamName={row.homeTeamName}
                                    visitorTeamName={row.visitorTeamName}
                                    accountId={id}
                                    votedForTeamId={row.votedForTeamId}
                                />
                            );
                        })
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
                <button onClick={handleSaveScores}>Save Scores</button>
            </div>
        </>
    );
};

export default AdminScoreItemList;
