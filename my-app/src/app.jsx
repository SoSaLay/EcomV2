import React from 'react';
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


import { ChakraProvider } from '@chakra-ui/react'
import './App.scss';


const App = () => {

    return (
        <ChakraProvider> 
        <AuthProvider>
        <Router>

        <div className="app-container">

        <NavBar />

        <div className="main-content">

                

                <Routes>
                  <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                     <Route path="/signin" element={<SignIn />} />
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