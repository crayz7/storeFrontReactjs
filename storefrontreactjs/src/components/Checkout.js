import React from 'react';
import Shoppingcart from './Shoppingcart';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

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