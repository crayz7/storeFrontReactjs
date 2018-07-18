import React from 'react';
import Shoppingcart from '../components/Shoppingcart';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => (
    <div>
        <Header />
        <Navbar />
        <h3 className="checkoutHeader">Checkout here!</h3>
        <hr></hr>
        
        <Shoppingcart />
    </div>
);

export default Checkout;