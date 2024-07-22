import React from 'react';
import './styles.scss';

const Cart = ({ cartItems, removeFromCart, totalAmount, checkout }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul className="cart-items">
                {cartItems.map(item => (
                    <li key={item.id}>
                        <div className="item-info">
                            <span className="item-title">{item.title}</span>
                            <span className="item-price">${item.price}</span>
                            <span className="item-quantity">x{item.quantity}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">Total: ${totalAmount.toFixed(2)}</div>
            <button className="checkout-button" onClick={checkout}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;