import React from 'react';

const GameCard = (props) => {
  return (
      <div className="game">
        <table className="game-module">
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
              <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/blazers.svg" alt="loading" /></td>
              <td>BLAZERS</td>
              <td className="pred-win">{props.homeWinPercent}</td>
              <td className="game-vote">✔</td>
              <td className="team-score">{props.homeFinalScore}</td>
            </tr>
            <tr>
              <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/heat.svg" alt="loading" /></td>
              <td>HEAT</td>
              <td className="pred-lose">{props.visitorWinPercent}</td>
              <td className="game-vote">✔️</td>
              <td className="team-score">{props.visitorFinalScore}</td>
            </tr>
          </tbody>
        </table>
      </div>

  );
}

export default GameCard
