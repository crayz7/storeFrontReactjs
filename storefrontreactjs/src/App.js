import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />

      </React.Fragment>
    );
  }
}

export default App;
