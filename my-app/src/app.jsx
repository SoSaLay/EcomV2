import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './reactGlobal/AuthContext';
import Footer from './components/footer/footer';
import NavBar from './components/navigation/navbar';


import SignIn from './reactGlobal/SignIn';
import SignUp from './reactGlobal/SignUp';
import Home from './UIview/home'
import Contact from './UIview/contact';
import MeetUs from './UIview/meetUs';
import Solutions from './UIview/solutions';
import Auth from './components/auth/auth';


import { ChakraProvider } from '@chakra-ui/react'
import './App.scss';
import ProductList from './components/products/productsList';
import Cart from './components/cart/cart';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';


const stripePromise = loadStripe('pk_test_51Pf0JXRu7i52rQN4EzQNTVOSXVrjKK85hBmlDrceFfh82wUoSKkPzcIlj6QGzt25zU5NncV8YvuxinYoh3AG03ed00oiTyboND');


const App = () => {

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

    const checkout = async () => {
        const response = await axios.post('http://localhost:5000/checkout', { items: cartItems });
        const { clientSecret } = response.data;
        // Handle Stripe payment process with clientSecret
    };

    return (
        <ChakraProvider> 
        <AuthProvider>
        <Router>

        <div className="app-container">

        <NavBar />

        <div className="main-content">

                

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                    <Route path="/meetUs" element={<MeetUs />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

        </div>
         
    
         <Footer/>
         </div>

        </Router>
        </AuthProvider>
        </ChakraProvider>
    );
};

export default App;