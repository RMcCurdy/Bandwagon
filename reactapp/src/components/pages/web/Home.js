import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavLink } from "react-router-dom";

function Home() {

  // images for slide show
  const slideImages = [
    '../../../img/landingpage/games-homepage.png',
    '../../../img/landingpage/shop-homepage.png',
    '../../../img/landingpage/badges-homepage.png',
    '../../../img/landingpage/leaderboard-homepage.png'
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 700,
    infinite: true,
    prevArrow: <div style={{width: "2em", marginRight: "-30px", backgroundColor: 'transparent'}}><img src="../../../img/landingpage/leftArrow.png" alt="leftArrow" style={{width: '3vw'}}/></div>,
    nextArrow: <div style={{width: "2em", marginLeft:"-3.5em", backgroundColor: 'transparent'}}><img src="../../../img/landingpage/rightArrow.png" alt="rightArrow" style={{width: '3vw'}}/></div>
  };

  return (
    <div>

      <div className="container-welcome">
        <span className="welcome-text">Welcome to Bandwagon</span><br/><br/>
        <span className="welcome-text-description">Jump on the Bandwagon before it's too late!</span>
      </div>

      <div className="slideshow-container">
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`, backgroundSize:'70vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Vote on games based on statistical analysis</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[1]})`, backgroundSize:'45vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Earn points to redeem prizes</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[2]})`, backgroundSize:'60vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Earn badges by completing challenges</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[3]})`, backgroundSize:'55vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <span className="slideshow-header-text">Compete against others for the top spot on the Leaderboard</span>
            </div>
          </div>
        </Slide>
      </div>
      
      <div className="container-signupnow">
        <h2 className="container-info-text">What are you waiting for? Sign up now!</h2>
        <div style={{paddingTop: '1em'}}><NavLink to="/signup" className="btn-signupnow">SIGN UP</NavLink></div>
      </div>

      <div className='container-copyright-footer'>
      <footer> <small>&copy; Copyright 2021, Awesome Corporation</small> </footer> 
      </div>
    
    </div>
  )
}

export default Home
