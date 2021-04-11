import React from 'react'

const ConfirmBuy = (props) => {
  return (
    <div>
      <button className="btn-shop btn-shop-confirm" onClick={props.handleShopOrderConfirm}>Confirm</button>
    </div>
  )
}

export default ConfirmBuy
