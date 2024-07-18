import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import NavBar from './components/navigation/navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./UIview/home"
import meetUs from './UIview/meetUs';
import solutions from './UIview/solutions';
import Contact from './UIview/contact';
import ResourceCenter from './UIview/resourceCenter';

import { ChakraProvider } from '@chakra-ui/react'
import FAQAccordion from './components/accordion/accordion';
import LoginPage from './components/loginPage/login';
import ConversionTable from './components/table/table';
import ProductCard from './components/card/card';



const App = () => {

    return (
        <ChakraProvider> 
        <Router>
            <div>
               
                <NavBar />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/meet-us">Meet Us</Link>
                    <Link to="/research-solutions">Research Solutions</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resource-center">Resource Center</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meet-us" element={<meetUs />} />
                    <Route path="/research-solutions" element={<solutions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resource-center" element={<ResourceCenter />} />
                </Routes>
                <Header />
                
                <ProductCard/>
                <Footer />
            </div>
        </Router>
        </ChakraProvider>
    );
};

export default App;