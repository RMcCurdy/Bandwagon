import React from 'react'
import ShopItem from './ShopItem';

function Shop() {
  return (
    <div className="shop">
      
      <span className="shop-header">
        <h1>Shop</h1> 
      </span>

      <br></br>
      
      <div className="cards-grid" style={{clear:'both'}}>
        
        <ShopItem />
        
      </div>
    </div>
  )
}

export default Shop
