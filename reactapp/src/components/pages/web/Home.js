import React from 'react'

function Home() {
  return (
    <div>

      <div className="container-welcome">
        <p className="welcome-text">Welcome to Bandwagon</p><br/>
        <p className="welcome-text-description">Jump on the Bandwagon before it's too late!</p>
      </div>

      <div className="container-info-grey">
        <h2 className="container-info-text">Vote on games based on statistical analysis!</h2>
        <img className="container-info-image" src="../../../img/landingpage/games.png" alt="future games"/>
      </div>

      {/* <div className="container-info-white">
        <h2 className="container-info-text">Earn points to redeem prizes!</h2>
        <img className="container-info-image" src="../../../img/landingpage/vote.png" alt="game voting process "/>
      </div>

      <div className="container-info-grey">
        <h2 className="container-info-text">Earn badges by completing challenges!</h2>
        <img className="container-info-image" src="../../../img/landingpage/profile.png" alt="Product Logo"/>
      </div>

      <div className="container-info-white">
        <h2 className="container-info-text">Compete against others for the top spot on the Leaderboard</h2>
        <img className="container-info-image" src="../../../img/landingpage/leaderboard.png" alt="Product Logo"/>
      </div> */}
      
      <div className="container-signupnow">
        <h2 className="container-info-text">What are you waiting for? Sign up now!</h2>
        <button className="btn-signupnow">SIGN UP</button>
      </div>
    
    </div>
  )
}

export default Home
