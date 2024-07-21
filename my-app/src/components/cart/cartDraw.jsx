import React from 'react';
import styles from './styles.scss'; 

const CartDrawer = ({ items, onCheckout, onClose }) => {
  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
      <ul className="cart-items">
        {items.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.quantity} x ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={onCheckout} className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartDrawer;
