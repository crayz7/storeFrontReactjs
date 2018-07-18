import React from 'react';

class Card extends React.Component {

    render() {
        const { params, products } = this.props;
        const { brand, price, image, desc } = products[params][0];

        console.log(params);

        return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="{image}" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{brand}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                </a>
                </div>
            </div>
        );
    }
}

export default Card;

// Object.keys(this.state.products).map(product => (
//     <Card brand={televisions.tv1.brand}