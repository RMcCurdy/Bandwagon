import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Home() {

  const slideImages = [
    '../../img/green.jpg',
    '../../img/gamesPreview.png',
    '../../img/gamesPreview.png'
  ];

  return (
    <div>

      <div className="container-welcome">
        <p className="welcome-text">Welcome to Bandwagon</p><br/>
        <p className="welcome-text-description">Jump on the Bandwagon before it's too late!</p>
      </div>

      {/* <div className="container-info-grey">
        <h2 className="container-info-text">Vote on games based on statistical analysis!</h2>
        <img className="container-info-image" src="../../../img/landingpage/games.png" alt="future games"/>
      </div> */}

      <div className="slideshow-container">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`, backgroundSize:'25vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, backgroundSize:'25vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, backgroundSize:'25vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Slide 3</span>
            </div>
          </div>
        </Slide>
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
