import React from 'react'

function Account() {
  return (
    <div className="homepage">

       <div className="news-title">
        <span className="news-header">NBA News</span>
      </div>

      <div className="news-grid" style={{clear:'both'}}>

        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/anunoby.jpg" alt="anunoby"/>
          <div className="news-info">
            <h3 className="news-info-title">Anunoby Ejected </h3>
             <p className="news-text">
             Raptors' OG Anunoby Ejected After Altercation With Montrezl Harrell
            </p>
              <a href="https://www.sportsnet.ca/nba/article/raptors-og-anunoby-ejected-altercation-montrezl-harrell" rel="noreferrer" target="_blank" className="learn-more">
              Click to learn more.
            </a>
          </div>
        </div>  

        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/harden.jpg" alt="harden"/>
          <div className="news-info">
            <h3 className="news-info-title">Harden Injury</h3>
             <p className="news-text">
             Brooklyn Nets Announce Injury Update For James Harden's Right Hamstring Strain
            </p>
             <a href="https://thespun.com/nba/brooklyn-nets/james-harden-injury-update-hamstring-strain" rel="noreferrer" target="_blank" className="learn-more">
              Click to learn more.
            </a>
          </div>
        </div> 

        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/lebron.jpg" alt="lebron"/>
          <div className="news-info">
            <h3 className="news-info-title">LeBron vs. Super Teams</h3>
            <p className="news-text">
              How Will LeBron Stack Up Against Yet Another Super Team, The Brooklyn Nets
            </p>
              <a href="https://www.espn.com/nba/story/_/id/30915504/los-angeles-lakers-lebron-james-talks-brooklyn-nets-trio-ahead-matchup" rel="noreferrer" target="_blank" className="learn-more">
              Click to learn more.
            </a>
          </div>
        </div>  
        
      </div>

      <div className="fg-container">

        <div className="fg-title">
        <p className="fg-title-text">Featured Match of the Day</p>
        </div>

        <div className="day">
          <p className="date-h3">Wednesday April 14</p>
        </div>

        <div className="featured-game">

          <div className="game-home-account">

            <table className="game-phx-lac" >

              <thead className="top-bar">
                <tr>
                  <th className="game-time" colSpan='3'>8:00pm MST</th>
                </tr>
              </thead>

              <tbody className="game-body">
                <tr>
                  <td className="logo-container-home-page"><img src="../../img/profile-pics/heat.svg" alt="logo1"/></td>
                  <td className="versus-text">VS</td>
                  <td className="logo-container-home-page"><img src="../../img/profile-pics/nuggets.svg" alt="logo2"/></td>
                </tr>

                <tr>
                  <td className="team-name-home-page">HEAT</td>
                  <td/>
                  <td className="team-name-home-page">NUGGETS</td>
                </tr>

              </tbody>

            </table>

          </div>   
              
        </div>
       
      </div>

    </div>
  )
}

export default Account
