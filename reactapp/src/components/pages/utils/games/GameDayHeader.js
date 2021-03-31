import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';

import GameCard from './GameCard';

const GameDayHeader = () => {

  const { gameData, setGameData } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Games').then((resp) => {
            setGameData(resp.data);
        });
    }, [setGameData]);

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
