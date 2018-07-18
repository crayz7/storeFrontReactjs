import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import sampleProducts from '../products';

class Products extends React.Component {
    state = {
        products: {},
        cart: {}
    };

    loadProducts() {
        this.setState({
            products: sampleProducts
        })
    }

    componentWillMount() {
        this.loadProducts()
    }

    addToCart = (key) => {
        //take a copy of state
        const cart = {...this.state.cart};
        //add to order or update the quantity
        cart[key] = cart[key] + 1 || 1;
        //update state
        this.setState({
            cart: cart
        })
    }

    componentDidUpdate() {
        console.log(this.state.cart)
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <Footer />
                <ul>
                    {/* map through products to create the cards */}
                    {this.state.products[this.props.match.params.id].map(key =>
                        <Card {...key} key={key} addToCart={this.addToCart}/>
                    )}
                </ul>
            </React.Fragment>
        );
    }
}

export default Products;