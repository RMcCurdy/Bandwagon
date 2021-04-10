import React, { useContext } from 'react';
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal';
import { useHistory } from 'react-router';
import axios from 'axios';
import ShopModal from '../ShopModal';
import AppContext from '../../../../context/AppContext';

const ShopItem = (props) => {

  const history = useHistory();

  const { setOrderId } = useContext(AppContext);

  const handleShopOrder = () => {
    const shopOrderToUpdate = {
      itemName: props.itemName,
      price: props.price,
      quantity: 1,
      subtotal: props.price,
      merchandiseIdRef: props.merchId,
      accountId: props.accountId
    }
    console.log('shopOrderToUpdate: ', shopOrderToUpdate);

    console.log('confirmed purchase...')
    axios.post(`http://localhost:5000/api/OrderLineItems`, shopOrderToUpdate)
    .then(resp => {
      console.log("new order id is: ", resp.data);
      setOrderId(resp.data);
    })
    history.push('/shopsuccess');
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <div className="card">
        <h3 className="title">{props.itemName}</h3>
        <div className="shop-box">
          <img src={'/img/merchandise/' + props.itemImage + '.png'} alt="..." style={{width:'60px'}}/>
        </div>
        <p>{numberWithCommas(props.price)}</p>
        <p>points</p>
        <ModalProvider>
          <ShopModal handleShopOrder={handleShopOrder} />
        </ModalProvider>
      </div>
    </div>
  )
}

export default ShopItem
