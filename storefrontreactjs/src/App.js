import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/store/:id' component={Products} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
)

export default App;