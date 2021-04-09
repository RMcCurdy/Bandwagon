import React from 'react'

function Account() {
  return (
    <div className="homepage">

       <div className="news-title">
        <span className="news-header">NEWS</span>
      </div>

      <div className="news-grid" style={{clear:'both'}}>

        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/anunoby.jpg" alt="anunoby"/>
          <div className="news-info">
            <h3 className="news-info-title">Anunoby Ejected </h3>
             <p className="news-text">
              OG Anunoby was ejected after an altercation with Harrell.
            </p>
              <p className="learn-more">
              Click to learn more.
            </p>

          </div>
        </div>  


        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/harden.jpg" alt="harden"/>
          <div className="news-info">
            <h3 className="news-info-title">Harden traded to Pelicans</h3>
             <p className="news-text">
              A record deal sees James Harden joining the Pelicans in May.
            </p>
             <p className="learn-more">
              Click to learn more.
            </p>
          </div>
        </div>  



        <div className="news-item">
          <img className="news-image" src="../../../img/homepage/lebron.jpg" alt="lebron"/>
          <div className="news-info">
            <h3 className="news-info-title">Here is more news</h3>
            <p className="news-text">
              More news occured in basketball today.
              Here is the news.
            </p>
              <p className="learn-more">
              Click to learn more.
            </p>
          </div>
        </div>  


        
      </div>

      <div className="fg-title">
       <h3>FEATURED MATCHUP TODAY</h3>
      </div>

       <div className="day">
          <h3 className="date-h3">Thursday April 8</h3>
       </div>

      <div className="featured-game">

                <div className="game">
                    <table className="game-phx-lac" >
                        <thead className="top-bar">
                            <tr className="tr">
                                <th></th>
                                <th className="game-time">10:00pm ET</th>
                                 <th></th>
                            </tr>
                        </thead>
                        <tbody className="game-body">
                            <tr><td></td></tr>
                            <tr className="logos">
                                <td className="logo1" ><img className="logo-img" src="https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png&amp;w=56&amp;h=56" alt="logo1"/></td>
                                <td className="versus-text">  <h3>VS </h3>   </td>
                                <td className="logo2" ><img className="logo-img" src="https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png&amp;w=56&amp;h=56" alt="logo2"/></td>
                            </tr>
                            <tr className="names">
                             <td className="team-name1" ><b>SUNS</b></td>
                             <td></td>
                             <td className="team-name2" ><b>CLIPPERS</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            
       
      </div>

    </div>
  )
}

export default Account
