import React from 'react'

const GamesCard = () => {
  return (
    <div>
      <div className="games-grid">
            <div className="game">
              <table className="game-module">
                <thead className="top-bar">
                  <tr>
                    <th className="game-time" colSpan="2">5:45pm MST</th>
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
                    <td className="pred-win">50</td>
                    <td className="game-vote">✔</td>
                    <td className="team-score">0</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/heat.svg" alt="loading" /></td>
                    <td>HEAT</td>
                    <td className="pred-lose">50</td>
                    <td className="game-vote">✔️</td>
                    <td className="team-score">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="game">
              <table className="game-module">
                <thead className="top-bar">
                  <tr>
                    <th className="game-time" colSpan="2">5:45pm MST</th>
                    <th className="our-prediction">Win %</th>
                    <th className="score">Score</th>
                  </tr>
                </thead>
                <tbody className="game-body">
                  <tr><td></td></tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/rockets.svg" alt="loading" /></td>
                    <td>ROCKETS</td>
                    <td className="pred-win">60</td>
                    <td className="team-score">0</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/suns.svg" alt="loading" /></td>
                    <td>SUNS</td>
                    <td className="pred-lose">40</td>
                    <td className="team-score">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="game">
              <table className="game-module">
                <thead className="top-bar">
                  <tr>
                    <th className="game-time" colSpan="2">5:45pm MST</th>
                    <th className="our-prediction">Win %</th>
                    <th className="score">Score</th>
                  </tr>
                </thead>
                <tbody className="game-body">
                  <tr><td></td></tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/lakers.svg" alt="loading" /></td>
                    <td>LAKERS</td>
                    <td className="pred-win">55</td>
                    <td className="team-score">0</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/celtics.svg" alt="loading" /></td>
                    <td>CELTICS</td>
                    <td className="pred-lose">45</td>
                    <td className="team-score">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
    </div>
  )
}

export default GamesCard
