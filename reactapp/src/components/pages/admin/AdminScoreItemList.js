import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';
import AdminScoreItem from './AdminScoreItem';
import AdminRecalcPayouts from './AdminRecalcPayouts';

const AdminScoreItemList = (props) => {
    const { id, gameData } = useContext(AppContext);

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

    return (
        <>
            <div
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '600px',
                    margin: '0 auto',
                    border: '2px solid #FF962C',
                    backgroundColor: '#fff',
                    borderRadius: '1.5rem',
                    padding: '0em',
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div
                        style={{
                            marginTop: '1rem',
                        }}></div>
                    {gameData ? (
                        gameData.map((row, idx) => {
                            return (
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
                <div
                    style={{
                        marginTop: '1.5rem',
                        marginBottom: '2rem',
                    }}>
                    <button
                        className='btn login'
                        style={{
                            border: '2px solid #FFCB99',
                            boxShadow: '2px 4px 5px grey',
                            fontFamily: 'inherit',
                        }}
                        onClick={handleSaveScores}>
                        Save Scores
                    </button>
                </div>
                <div>
                    <AdminRecalcPayouts />
                </div>
            </div>
        </>
    );
};

export default AdminScoreItemList;
