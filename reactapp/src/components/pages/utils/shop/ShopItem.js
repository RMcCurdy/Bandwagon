import React from 'react'

const ShopItem = (props) => {
  return (
    <div>
      <div className="card">
        <h3 className="title">Red Border</h3>
        <div className="shop-box" style={{backgroundColor:'red'}}></div>
        <p>100 Points</p>
        <button>ADD</button>
      </div>
    </div>
  )
}

export default ShopItem
