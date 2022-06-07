import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // const { img, name } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={props?.product?.img} alt="" />
            </div>

            <div>
                <h4 className='product-name'>{props?.product?.name}</h4>
                <br />
                <p><small>by: {props?.product?.seller}</small></p>
                <p><small>${props?.product?.price}</small></p>
                <p><small>Only {props?.product?.stock} left in stock - Order soon</small></p>
                <button
                    className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
        </div>

    );
};
export default Product;