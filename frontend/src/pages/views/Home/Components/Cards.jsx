// React Imports
import React from 'react';
import { useDispatch } from 'react-redux';
// CSS Imports
import './Cards.css';
import { addToCart } from '../../Cart/Store';

const Cards = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div
      className='card mx-2'
      style={{ width: 'unset', padding: '2rem', minHeight: '400px' }}
    >
      <div className='d-flex flex-column align-items-center px-5 remove-px'>
        <div className='card-image-wrapper'>
          <img
            className='mx-auto img-thumbnail mt-3'
            src={product?.image}
            alt='logo'
          />
        </div>
      </div>
      <div className='card-body text-center mx-auto d-flex flex-column justify-content-center'>
        <h5
          className='card-title font-weight-bold mt-2 mb-3'
          style={{ minHeight: '50px' }}
        >
          {product?.title.substring(0, 40)}
        </h5>
        <p className='card-text m-0'>${product?.price}</p>
        <div className='button-fixed'>
          <br />
          <button
            type='button'
            className='btn btn-warning'
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
