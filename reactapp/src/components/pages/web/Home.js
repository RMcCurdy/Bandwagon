import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavLink } from "react-router-dom";

function Home() {

  // images for slide show
  const slideImages = [
    '../../../img/landingpage/games.png',
    '../../../img/landingpage/vote.png',
    '../../../img/landingpage/profile.png',
    '../../../img/landingpage/leaderboard.png'
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 700,
    infinite: true,
    prevArrow: <div style={{width: "2em", marginRight: "-30px", backgroundColor: 'transparent'}}><img src="../../../img/landingpage/leftArrow.png" alt="leftArrow"/></div>,
    nextArrow: <div style={{width: "2em", marginLeft: "-50px", backgroundColor: 'transparent'}}><img src="../../../img/landingpage/rightArrow.png" alt="rightArrow"/></div>
  };

  return (
    <div>

      <div className="container-welcome">
        <p className="welcome-text">Welcome to Bandwagon</p><br/>
        <p className="welcome-text-description">Jump on the Bandwagon before it's too late!</p>
      </div>

      <div className="slideshow-container">
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`, backgroundSize:'50vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Vote on games based on statistical analysis</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, backgroundSize:'50vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Earn points to redeem prizes</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, backgroundSize:'50vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Earn badges by completing challenges</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`, backgroundSize:'50vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Compete against others for the top spot on the Leaderboard</span>
            </div>
          </div>
        </Slide>
      </div>

      {/* 
      <div className="container-info-grey">
        <h2 className="container-info-text">Vote on games based on statistical analysis!</h2>
        <img className="container-info-image" src="../../../img/landingpage/games.png" alt="future games"/>
      </div>
      
      <div className="container-info-white">
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
      </div> 
      */}
      
      <div className="container-signupnow">
        <h2 className="container-info-text">What are you waiting for? Sign up now!</h2>
        <div style={{paddingTop: '1em'}}><NavLink to="/signup" className="btn-signupnow">SIGN UP</NavLink></div>
      </div>
    
    </div>
  )
}

export default Home
