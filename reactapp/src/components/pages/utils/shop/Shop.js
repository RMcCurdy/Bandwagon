import React, { useEffect, useContext } from 'react';
import ShopItem from './ShopItem';
import axios from 'axios';
import AppContext from '../../../../context/AppContext';

function Shop(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const {
        id,
        merchandise,
        setMerchandise,
        totalPointsBalance
    } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Merchandises').then((resp) => {
            console.log('this is the merchandise data :', resp.data);
            setMerchandise(resp.data);
        });
    }, [setMerchandise]);

    return (
        <div className='shop'>
            <span className='shop-header'>
                <h1 className='shop-header-text'>Shop</h1>
                <div className='shop-header-my-balance'>
                    <h2>My Balance: {numberWithCommas(totalPointsBalance)}</h2>
                </div>
            </span>

            <br></br>

            <div className='cards-grid' style={{ clear: 'both' }}>
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
    );
}

export default Shop;
