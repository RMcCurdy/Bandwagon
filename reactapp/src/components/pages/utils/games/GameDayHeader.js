import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';

import GameCard from './GameCard';

const GameDayHeader = (props) => {

  const { id, gameData, setGameData, gameDate } = useContext(AppContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Games/${gameDate}/${id}`).then((resp) => {
            setGameData(resp.data);
        });
    }, [id, setGameData, gameDate]);

    // console.log('game data before return: ', gameData[0])
    return (
    <>
        {gameData[0] ? (
            gameData.map((row) => {
                return (
                    <GameCard
                        key={row.id}
                        gameTime={row.gameTime}
                        homeTeamId={row.homeTeamId}
                        visitorTeamId={row.visitorTeamId}
                        homeWinPercent={row.homePercent}
                        visitorWinPercent={row.visitorPercent}
                        homeFinalScore={row.homeFinalScore}
                        visitorFinalScore={row.visitorFinalScore}
                        homeTeamName={row.homeTeamName}
                        visitorTeamName={row.visitorTeamName}
                        votedForTeamId={row.votedForTeamId}
                    />
                );
            })
        ) : (
            <p>loading...</p>
        )}
    </>
  );
}

export default GameDayHeader
