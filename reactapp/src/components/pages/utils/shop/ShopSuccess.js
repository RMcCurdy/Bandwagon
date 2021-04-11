import React from 'react'
import { Link } from "react-router-dom";

const ShopSuccess = () => {
  return (
    <>
    <h1>Thanks for shopping!</h1>
    <h2>Your order will arrive in 3-5 business days</h2>
    <h2>An email has been sent to you with your order details</h2>
    <img src={'/img/gifs/truck.gif'} alt="truck"/>
    <br/>
    <div className="shop-success">
      <Link to="/account" className="nav-tabs">Go to Home</Link>
      <Link to="/shop" className="nav-tabs">Shop More</Link>
    </div>
    </>
  )
}

export default ShopSuccess
