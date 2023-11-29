import React from 'react';
import Modal from '../UI/Modal';
import './Cart.css';

const Items = [
  {
    id: 'c1',
    name: 'Sushi',
    amount: 2,
    price: 12.99,
  },
];

const Cart = (props) => {
  const cartItems = Items.map((item) => (
    <li key={item.id}>
      {item.name} ({item.amount}x ${item.price.toFixed(2)})
    </li>
  ));

  return (
    <Modal>
      <ul className="cart-items">{cartItems}</ul>
      <div className="total">
        <span>Total Amount:</span>
        <span>$35.62</span>
      </div>
      <div className="actions">
        <button className="button button--alt" onClick={props.onCartClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
