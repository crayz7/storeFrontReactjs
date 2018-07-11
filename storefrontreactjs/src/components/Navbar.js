import React from 'react';
import Shoppingcart from './Shoppingcart';

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-auto">
          {/* Navbar selections */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Electronics
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/store/laptops">Laptops</a>
                  <a className="dropdown-item" href="/store/televisions">Televisions</a>
                  <a className="dropdown-item" href="/store/gaming">Gaming Consoles</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Clothing
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/store/shirts">Shirts</a>
                  <a className="dropdown-item" href="/store/pants">Pants</a>
                  <a className="dropdown-item" href="/store/jackets">Jackets</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Books
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/store/bestsellers">Bestsellers</a>
                  <a className="dropdown-item" href="/store/fiction">Fiction</a>
                  <a className="dropdown-item" href="/store/nonfiction">Non-fiction</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* End navbar selections */}

        {/* Search */}
        <div className="col col-md-auto">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search for an item" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        {/* End search */}

        {/* Shopping cart dropdown */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shopping Cart
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="/checkout"><button type="button" className="btn btn-primary">Checkout</button></a>
              <hr></hr>
              <Shoppingcart />
            </div>
          </li>
        </ul>
        {/* End shopping cart dropdown */}
      </div>
    </div>
  </nav>

);

export default Navbar;