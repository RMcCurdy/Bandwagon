import React, { useEffect, useContext } from 'react';
import ShopItem from './ShopItem';
import axios from 'axios';
import AppContext from '../../../../context/AppContext';

function Shop() {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { id, merchandise, setMerchandise, totalPointsBalance, totalPointsSpent, setTotalPointsBalance, setTotalPointsSpent } = useContext(AppContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Merchandises').then((resp) => {
        console.log('this is the merchandise data :', resp.data);
        setMerchandise(resp.data);
    });
}, [setMerchandise]);

  return (
    <div className="shop">
      
      <span className="shop-header">
        <h1>Shop</h1>
        <div style={{border: '2px solid hsl(29, 97%, 45%)', borderRadius:'15px', padding:'0.25em 1em', backgroundColor:'hsl(29, 97%, 55%)', color:'white'}}>
          <h2>My Balance: {numberWithCommas(totalPointsBalance)}</h2>
        </div>
      </span>

      <br></br>
      
      <div className="cards-grid" style={{clear:'both'}}>
        
      {merchandise[0] ? (
            merchandise.map((row, idx) => {
                return (
                    <ShopItem
                        key={idx}
                        merchId={row.id}
                        itemName={row.itemName}
                        itemImage={row.itemImage}
                        price={row.price}
                        accountId={id}
                    />
                );
            })
        ) : (
            <p>loading...</p>
        )}
        
      </div>
    </div>
  )
}

export default Shop
