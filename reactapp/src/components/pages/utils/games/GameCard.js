import React from 'react';

const GameCard = (props) => {
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
              <td className={`${props.homeTeamId === props.votedForTeamId ? "voted-for" : "not-voted-for"}`}>
                {props.homeTeamId === props.votedForTeamId
                  ? '✔️'
                  : ''}
              </td>
              <td className="team-score">{props.homeFinalScore}</td>
            </tr>
            <tr>
              <td className="logo-games logo-left"><img className="logo-img" src={`../../../img/profile-pics/${props.visitorTeamName}.svg`} alt="loading" /></td>
              <td className="team-name-left">{props.visitorTeamName}</td>
              <td className="pred-lose">{props.visitorWinPercent}</td>
              <td className={`${props.visitorTeamId === props.votedForTeamId ? "voted-for" : "not-voted-for"}`}>
                {props.visitorTeamId === props.votedForTeamId
                  ? '✔️'
                  : ''}
              </td>
              <td className="team-score">{props.visitorFinalScore}</td>
            </tr>
          </tbody>
        </table>
      </div>

  );
}

export default GameCard
