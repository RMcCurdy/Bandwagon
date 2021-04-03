import React from 'react'

function Shop() {
  return (
    <div className="shop">
      
      <span className="shop-header">
        <h1>Shop</h1>
        <button className="purchase-history-btn">See Purchase History</button>  
      </span>

      <br></br>
      
      <div className="cards-grid" style={{clear:'both'}}>
        <div className="card">
          <h3 className="title">Red Border</h3>
          <div className="shop-box" style={{backgroundColor:'red'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3 className="title">Blue Border</h3>
          <div className="shop-box" style={{backgroundColor:'blue'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3 className="title">Green Border</h3>
          <div className="shop-box" style={{backgroundColor:'green'}}></div>
          <p>100 points</p>
          <button>BUY</button>
        </div>  
        <div className="card">
          <h3 className="title">Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3 className="title">Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3 className="title">Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        <div className="card">
          <h3 className="title">Yellow Border</h3>
          <div className="shop-box" style={{backgroundColor:'yellow'}}></div>
          <p>250 points</p>
          <button>BUY</button>
        </div>
        
      </div>
    </div>
  )
}

export default Shop
