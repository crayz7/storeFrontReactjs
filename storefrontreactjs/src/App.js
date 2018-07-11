import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';


class App extends React.Component {
  state = {
    cart: {}
};
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
