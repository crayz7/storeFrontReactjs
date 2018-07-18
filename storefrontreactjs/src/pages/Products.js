import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import sampleProducts from '../products';

class Products extends React.Component {
    state = {
        products: {}
    };

    loadProducts() {
        this.setState({
            products: sampleProducts 
        })
    }

    componentWillMount() {
        this.loadProducts()
        
    }

    render() {
        // let params = this.props.match.params.id
        // console.log(this.props.match.params.id)
        // let params = this.props.match.params.id
        // console.log(this.state.products)
      return (
        <React.Fragment>
          <Header />
          <Navbar />
          <Footer />
            <ul>
                <Card products={this.state.products} params={this.props.match.params.id}/>
            </ul>
        </React.Fragment>
      );
    }
  }

export default Products;