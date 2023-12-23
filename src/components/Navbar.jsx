import React, { useState , useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal } from 'react-bootstrap';

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum , product)=> sum + product.quantity , 0);
  // const productCount = cart.items.length; //wrong way

  return (
    <>
      <div className='navbar'>
        <div className="navbar-cart">
          <button className='navbar-btn' onClick={handleShow}>
            <span>سبد خرید</span>
            <i className="fa fa-shopping-cart"></i>({productCount})
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} className='modal'>
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title>سبد خرید</Modal.Title>
          <Modal.Body>Product</Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  )
}
