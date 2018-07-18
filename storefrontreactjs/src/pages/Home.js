import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {

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

export default Home;