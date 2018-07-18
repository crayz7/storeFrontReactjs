import React from 'react';

class Card extends React.Component {

    render() {
        // const { params, products } = this.props;
        const { brand, price, image, desc } = this.props;

        // console.log(this.props);

        return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="{image}" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{brand}</h5>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{desc}</p>
                    <button onClick={() => this.props.addToCart(this.props.key)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;