import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameCard = (props) => {

  // const gameCardData = {
  //   gameId: props.gameId,
  //   accountId: props.accountId,
  //   votedForTeamId: props.votedForTeamId
  // }

  const handleVoteClick = (updatedVotedForTeamId) => {
    setVotedForThisTeamId(updatedVotedForTeamId)
    }    

  const [votedForThisTeamId, setVotedForThisTeamId] = useState(props.votedForTeamId)

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/Votes/${props.gameId}/${props.accountId}`, votedForThisTeamId)
      .then()
    .then((resp) => {
        console.log('votedForThisTeamId response is: ', resp.data);  //14
        setVotedForThisTeamId(resp.data);
    });
  }, [votedForThisTeamId, props.gameId, props.accountId]);



  return (
      <div className="game">
        <table cellSpacing="8" className="game-module">
          <thead className="top-bar">
            <tr>
              <th className="game-time" colSpan="2">{props.gameTime}</th>
              <th className="our-prediction">Win %</th>
              <th className="vote">Vote</th>
              <th className="score">Score</th>
            </tr>
          </thead>
          <tbody className="game-body">
            <tr><td></td></tr>
            <tr>
              <td className="logo-games logo-left"><img className="logo-img" src={`../../../img/profile-pics/${props.homeTeamName}.svg`} alt="loading" /></td>
              <td className="team-name-left">{props.homeTeamName}</td>
              <td className="pred-win">{props.homeWinPercent}</td>
              <td onClick={handleVoteClick(props.homeTeamId)} className={`${props.homeTeamId === votedForThisTeamId ? "voted-for" : "not-voted-for"}`}>
                {props.homeTeamId === props.votedForTeamId
                  ? '✔️'
                  : 'vote'}
              </td>
              <td className="team-score">{props.homeFinalScore}</td>
            </tr>
            <tr>
              <td className="logo-games logo-left"><img className="logo-img" src={`../../../img/profile-pics/${props.visitorTeamName}.svg`} alt="loading" /></td>
              <td className="team-name-left">{props.visitorTeamName}</td>
              <td className="pred-lose">{props.visitorWinPercent}</td>
              <td onClick={handleVoteClick(props.visitorTeamId)} className={`${props.visitorTeamId === votedForThisTeamId ? "voted-for" : "not-voted-for"}`}>
                {props.visitorTeamId === props.votedForTeamId
                  ? '✔️'
                  : 'vote'}
              </td>
              <td className="team-score">{props.visitorFinalScore}</td>
            </tr>
          </tbody>
        </table>
      </div>

  );
}

export default GameCard
