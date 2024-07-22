import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../components/cart/cart';
import ProductList from '../components/products/productsList';

const Solutions = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setTotalAmount(totalAmount + product.price);
    };

    const removeFromCart = (productId) => {
        const product = cartItems.find(item => item.id === productId);
        setCartItems(cartItems.filter(item => item.id !== productId));
        setTotalAmount(totalAmount - product.price * product.quantity);
    };

    const checkout = () => {
        // Add your checkout logic here
        console.log('Proceeding to checkout with items:', cartItems);
    };

    return (
        <div className="solutions-page">
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} totalAmount={totalAmount} checkout={checkout} />
            {/* <h2>Us Vs Them</h2>

             <ConversionTable/> */}
        
        </div>
    );
};

export default Solutions;