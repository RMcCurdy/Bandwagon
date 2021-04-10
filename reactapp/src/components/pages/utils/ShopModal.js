import React from 'react';
import {
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal';

const ShopModal = (props) => {
  
  const { isModalOpen, openModal } = useModal();



  return (
    <>
      <button className='btn-shop' onClick={openModal}>BUY</button>
      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen}
        transition={ModalTransition.SCALE}
      >
        <button className='btn-shop btn-shop-confirm' onClick={props.handleShopOrder}>Click to confirm</button>
      </Modal>
    </>
  );
};

export default ShopModal
