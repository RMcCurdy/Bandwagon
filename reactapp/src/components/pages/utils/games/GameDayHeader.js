import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';

import GameCard from './GameCard';

const GameDayHeader = () => {

  const { chosenDate, setChosenDate } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Games').then((resp) => {
            setChosenDate(resp.data);
        });
    }, [setChosenDate]);

    return (
      <div>
          <div>
              <div>
                  {chosenDate[0] ? (
                      chosenDate.map((row) => {
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
                              />
                          );
                      })
                  ) : (
                      <p>loading...</p>
                  )}
              </div>
          </div>
      </div>
  );
}

export default GameDayHeader
