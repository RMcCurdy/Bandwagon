import React from 'react'

function Leaderboard() {
  return (
    <div>
      <div class="leaderboard">

<span className="leaderboard-header">
  <h1>Leaderboard</h1>
</span>

<div className="leaderboard-tabs">
  <button className="leaderboard-btn">Weekly</button>
  <button className="leaderboard-btn">Monthly</button>
  <button className="leaderboard-btn">All Time</button>
</div>

<table>
  <tr>
    <th>Username</th>
    <th>Points Earned</th>
    <th>Guess Accuracy</th>
  </tr>
  <tr>
    <td>NBAstreetBETS</td>
    <td>100</td>
    <td>100%</td>
  </tr>
  <tr>
    <td>Username1</td>
    <td>70</td>
    <td>90%</td>    
  </tr>
  <tr>
    <td>HelloWorld</td>
    <td>50</td>
    <td>70%</td>    
  </tr>
  <tr>
    <td>example_user</td>
    <td>50</td>
    <td>70%</td>    
  </tr>
</table>
</div>
    </div>
  )
}

export default Leaderboard
