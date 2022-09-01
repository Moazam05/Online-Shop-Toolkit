// React Imports
import React from 'react';
// import { Link } from 'react-router-dom';
// CSS Imports
import './Cards.css';

const Cards = ({ product }) => {
  return (
    <div
      className='card mx-2'
      style={{ width: 'unset', padding: '2rem', minHeight: '400px' }}
    >
      <div className='d-flex flex-column align-items-center px-5 remove-px'>
        <div className='card-image-wrapper'>
          <img
            className='mx-auto img-thumbnail mt-3'
            src='https://www.apple.com/v/iphone-13-pro/a/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg'
            alt='logo'
          />
        </div>
      </div>
      <div className='card-body text-center mx-auto d-flex flex-column justify-content-center'>
        <h5
          className='card-title font-weight-bold'
          style={{ minHeight: '50px' }}
        >
          {/* {product?.title} */}
          iphone 13
        </h5>
        <p className='card-text'>
          $1200
          {/* {product?.price} */}
        </p>
        <div className='button-fixed'>
          <br />
          <button
            type='button'
            className='btn btn-warning'
            // onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
