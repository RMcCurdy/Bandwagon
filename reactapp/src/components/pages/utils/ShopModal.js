import React from 'react';
import {
  Modal,
  ModalTransition,
} from 'react-simple-hook-modal';

const ShopModal = (props) => {

  return (
    <>
      
      <Modal
        id="any-unique-identifier"
        transition={ModalTransition.SCALE}
      >
        <button className='btn-shop btn-shop-confirm'>Click to confirm</button>
      </Modal>
    </>
  );
};

export default ShopModal
