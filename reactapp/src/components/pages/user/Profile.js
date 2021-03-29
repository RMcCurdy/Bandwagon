import React from 'react'

function Profile() {
  return (
    <div className="profile">
      
      <span className="profile-header">
        <h1>Profile</h1>
        <button className="edit-profile-btn">Edit Profile</button>  
      </span>

      <div className="user-profile-pic">
        <img className="profile-pic" src="../../../img/badges-test/profile-pic.png" style={{width:'5em', height:'5em'}} alt="Yao Ming"></img>
          <div>Click to edit</div>
      </div>
      <div className="username">
          <p><b>IamYaoMing</b></p>
        </div>
        <div className="current-badge">
          <img className="profile-pic" src="../../../img/badges-test/current-badge.png" style={{width:'2em', height:'2em'}} alt="loading"></img>
          <div><b>2nd Place: </b>Being second in the leaderboard for a week</div>     
         </div>
      <div className="user-info">
      
        <p><b>Username: </b>IamYaoMing</p>
        <p><b>Account Email: </b>yaoyao@email.com</p>
        <p><b>Created: </b>February 31, 2000</p>
        <p><b>Additional list item: </b>yes</p>
      </div>

        <div className="user-stats-table">
            <p><b>YOUR STATS</b></p>
            <table className="stat-table" id="stats">
                <tbody>
                    <tr>
                        <td>POINT BALANCE</td>
                        <td style={{padding:'0 15px 0 35px'}} className="total-points-earned">6,245</td>
                    </tr>
                    <tr>
                      <td>TOTAL POINTS EARNED</td>
                      <td style={{padding:'0 15px 0 35px'}} className="total-badges">11,245</td>
                  </tr>
                  <tr>
                    <td>TOTAL POINTS SPENT</td>
                    <td style={{padding:'0 15px 0 35px'}} className="total-badges">5,000</td>
                </tr>
                    <tr>
                        <td>TOTAL GAMES VOTED ON</td>
                        <td style={{padding:'0 15px 0 35px'}} className="total-games">300</td>
                    </tr>
                    <tr>
                        <td>CORRECT</td>
                        <td style={{padding:'0 15px 0 35px'}} className="correct">290</td>
                    </tr>
                    <tr>
                        <td>INCORRECT</td>
                        <td style={{padding:'0 15px 0 35px'}} className="incorrect">10</td>
                    </tr>
                    <tr>
                        <td>TOTAL BADGES EARNED</td>
                        <td style={{padding:'0 15px 0 35px'}} className="total-badges">8</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        

    </div>
  )
}

export default Profile
