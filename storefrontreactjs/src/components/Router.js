import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Products from './Products';
import Checkout from './Checkout';

const Router = () => (
    

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='/store/' component={Products} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router;