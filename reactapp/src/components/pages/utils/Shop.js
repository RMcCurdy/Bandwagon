import React from 'react'

function Shop() {
  return (
    <div className="shop">
      
      <span className="shop-header">
        <h1>Shop</h1>
        <button className="purchase-history-btn">See Purchase History</button>  
      </span>

      <div className="shop-tabs">
        <button className="shop-btn">Profile Borders</button>
        <button className="shop-btn">Name Colors</button>
        <button className="shop-btn">Badges</button>
      </div>

      <br></br>
      
      <div className="cards-grid" style={{clear:'both'}}>
        <div className="card">
          <h3>Red Border</h3>
          <div className="shop-box" style={{backgroundColor:'red'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3>Blue Border</h3>
          <div className="shop-box" style={{backgroundColor:'blue'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3>Green Border</h3>
          <div className="shop-box" style={{backgroundColor:'green'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>  
        <div className="card">
          <h3>Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3>Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3>Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3>Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        
      </div>
    </div>
  )
}

export default Shop
