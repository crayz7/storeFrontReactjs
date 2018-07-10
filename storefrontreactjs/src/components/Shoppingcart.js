import React from 'react';

class Shoppingcart extends React.Component {
    render() {
        return (
        <div className="container">
            <div className='shoppingcart'>
                <p>Item name x2............Price</p>
                <p>Item name x1............Price</p>
                <p>Item name x3............Price</p>
                <p>Total Price</p>
            </div>
        </div>
        );
    }
}

export default Shoppingcart;