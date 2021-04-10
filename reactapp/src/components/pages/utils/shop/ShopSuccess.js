import React from 'react'
import { Link } from "react-router-dom";

const ShopSuccess = () => {
  return (
    <>
    <h1>Thanks for shopping!</h1>
    <img src={'/img/gifs/truck.gif'} alt="truck"/>
    <div>
      <Link to="/account" className="nav-tabs">Go to Home</Link>
      <Link to="/shop" className="nav-tabs">Shop More</Link>
    </div>
    </>
  )
}

export default ShopSuccess
