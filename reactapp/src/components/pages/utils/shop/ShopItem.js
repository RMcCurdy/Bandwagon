import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import AppContext from '../../../../context/AppContext';
import ConfirmBuy from './ConfirmBuy';

const ShopItem = (props) => {

    const [ confirm, setConfirm ] = useState(false);

    const history = useHistory();

    const { setOrderId, totalPointsBalance, totalPointsSpent, setTotalPointsBalance, setTotalPointsSpent } = useContext(AppContext);

    const handleShopOrderConfirm = () => {
        const shopOrderToUpdate = {
            itemName: props.itemName,
            price: props.price,
            quantity: 1,
            subtotal: props.price,
            merchandiseId: props.merchId,
            accountId: props.accountId,
        };
        console.log('shopOrderToUpdate: ', shopOrderToUpdate);
        console.log('confirmed purchase...');
        axios
            .post(`http://localhost:5000/api/OrderLineItems`, shopOrderToUpdate)
            .then((resp) => {
                console.log('new order id is: ', resp.data);
                setOrderId(resp.data.orderId);
                const newTotalPointsBalance = totalPointsBalance - resp.data.orderTotal;
                const newTotalPointsSpent = totalPointsSpent + resp.data.orderTotal;
                console.log('balance and spent', newTotalPointsBalance, newTotalPointsSpent);
                setTotalPointsBalance(newTotalPointsBalance);
                setTotalPointsSpent(newTotalPointsSpent);
            });
        history.push('/shopsuccess');
    };

    const handleVisibleConfirm = () => {
      setConfirm(true);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const buyButton = <button className='btn-shop' onClick={handleVisibleConfirm}>BUY</button>

    const blockButton = <button className='btn-shop-blocked'>NEED MORE</button>

    return (
        <div>
            <div className='card'>
                <h3 className='title'>{props.itemName}</h3>
                <div className='shop-box'>
                    <img className='shop-item-image' src={'/img/merchandise/' + props.itemImage + '.png'} alt='...'/>
                </div>
                <div>
                    <span>{numberWithCommas(props.price)}</span>
                </div>
                <span>points</span>
                {(totalPointsBalance < props.price) ? blockButton : buyButton}
                {confirm ? <ConfirmBuy handleShopOrderConfirm={handleShopOrderConfirm}/> : ''}
            </div>
        </div>
    );
};

export default ShopItem;
