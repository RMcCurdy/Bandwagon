import React from 'react';
import {
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal';

const ShopModal = (props) => {
  
  // const { isModalOpen, openModal } = useModal();

//   const handleSubmitOrder = (
//     itemName,
//     price,
//     quantity,
//     subtotal,
//     mergandiseIdRef,
//     accountId,
// ) => {
//     const shopOrderToUpdate = {
//         itemName: props.itemName,
//         price: props.price,
//         quantity: 1,
//         subtotal: props.price,
//         merchandiseIdRef: props.merchId,
//         accountId: props.accountId,
//     };
//     console.log('shopOrderToUpdate: ', shopOrderToUpdate);

//     console.log('confirmed purchase...');
//     axios
//         .post(`http://localhost:5000/api/OrderLineItems`, shopOrderToUpdate)
//         .then((resp) => {
//             console.log('new order id is: ', resp.data);
//             setOrderId(resp.data);
//         });
//     history.push('/shopsuccess');
// };

  return (
    <>
      
      <Modal
        id="any-unique-identifier"
        // isOpen={isModalOpen}
        transition={ModalTransition.SCALE}
      >
        <button className='btn-shop btn-shop-confirm'>Click to confirm</button>
      </Modal>
    </>
  );
};

export default ShopModal
