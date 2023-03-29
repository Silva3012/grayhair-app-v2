import React from 'react';
import '../styles/Product.css';

function Product(props) {
    // Destructure props for readability
    const { name, image, price } = props;
    return (
        <div className='product'>
            {/* Product name */}
            <h3>{name}</h3>
            {/* Product image */}
            <img src={image} alt={name} />
            {/* Product price */}
            <p>R{price}</p>
        </div>
    );
}

export default Product;