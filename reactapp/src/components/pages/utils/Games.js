import React from 'react'

function Games() {
  return (
    <div className="upcoming-games">
      
      <span className="upcomimg-games-header">
        <h1>Upcoming Games</h1>
      </span>

      <div>
        <h3 className="date-h3">Sunday March 21</h3>
        <div className="games-grid">
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
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/blazers.svg" alt="POR-logo" /></td>
                    <td>TRAIL BLAZERS</td>
                    <td className="pred-win">WIN</td>
                    <td className="team-score">21</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/heat.svg" alt="MIA-logo" /></td>
                    <td>HEAT</td>
                    <td className="pred-lose">LOSE</td>
                    <td className="team-score">18</td>
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
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/blazers.svg" alt="POR-logo" /></td>
                    <td>TRAIL BLAZERS</td>
                    <td className="pred-win">WIN</td>
                    <td className="team-score">21</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/heat.svg" alt="MIA-logo" /></td>
                    <td>HEAT</td>
                    <td className="pred-lose">LOSE</td>
                    <td className="team-score">18</td>
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
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/blazers.svg" alt="POR-logo" /></td>
                    <td>TRAIL BLAZERS</td>
                    <td className="pred-win">WIN</td>
                    <td className="team-score">21</td>
                  </tr>
                  <tr>
                    <td className="logo-games"><img className="logo-img" src="../../../img/profile-pics/heat.svg" alt="MIA-logo" /></td>
                    <td>HEAT</td>
                    <td className="pred-lose">LOSE</td>
                    <td className="team-score">18</td>
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Games