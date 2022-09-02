// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
// Custom Imports
import Layout from '../../../components/Layout';
// Icons Imports
import { BsArrowLeft, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { removeFromCart, decreaseQuantity, addToCart } from './Store/index';
import './Components/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  // console.log(cart);

  return (
    <Layout>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div className='card p-5' style={{ width: '100%' }}>
              <div className='left-wrap'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className='mb-3'>
                    <Link to='/' className='text-body continue'>
                      <BsArrowLeft className='me-2' />
                      Continue shopping
                    </Link>
                  </h5>

                  <div className='d-flex gap-2'>
                    <div className='mb-1' style={{ color: '#888888' }}>
                      <AiOutlineShoppingCart />
                    </div>
                    <p className='mb-1'>Shopping cart</p>
                  </div>
                </div>
                <hr style={{ marginTop: '0' }} />
                <div className='mb-4'>
                  <div>
                    {cart?.cartItems?.length > 0 ? (
                      <p className='mb-0'>
                        You have {cart?.cartItems.length} items in your cart
                      </p>
                    ) : (
                      <p className='mb-0'>Your cart is currently empty</p>
                    )}
                  </div>
                </div>
              </div>
              {cart?.cartItems.length > 0 && (
                <div className='titles'>
                  <h5 className='mb-4 text-muted'>Product</h5>
                  <h5 className='mb-4 text-muted'>Price</h5>
                  <h5 className='mb-4 text-muted text-center'>Quantity</h5>
                  <h5 className='mb-4 text-muted text-end'>Total</h5>
                </div>
              )}

              {cart?.cartItems.map((item, index) => (
                <div key={index}>
                  <div className='cart-items'>
                    <div className='d-flex flex-row align-items-center'>
                      <div>
                        <img
                          src={item?.image}
                          className='img-fluid rounded-3'
                          alt='Shopping item'
                          style={{ width: 65 }}
                        />
                      </div>
                      <div className='ms-3'>
                        <h5>{item?.title.substring(0, 21)}</h5>
                        <p className='small mb-0'>{item?.category}</p>
                        <button
                          style={{ fontSize: '12px' }}
                          type='button'
                          className='btn btn-danger btn-sm mt-2 text-capitalize'
                          onClick={() => handleRemoveCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div>
                      <h5 className='mb-0'>${item?.price} </h5>
                    </div>
                    <div className='d-flex flex-row align-items-center icon gap-3 justify-content-center'>
                      <button
                        className='fw-bold border-0'
                        style={{
                          color: '#888888',
                          background: 'transparent',
                        }}
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        <BiMinus fontSize={23} />
                      </button>
                      <div>
                        <h5 className='mb-0'>{item?.cartQuantity}</h5>
                      </div>
                      <button
                        className='fw-bold border-0'
                        style={{
                          color: '#888888',
                          background: 'transparent',
                        }}
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        <BsPlus fontSize={23} />
                      </button>
                    </div>
                    <div className='text-end'>
                      <h5 className='mb-0'>
                        ${item?.price * item?.cartQuantity}
                      </h5>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <hr />
                  </div>
                </div>
              ))}
              {cart?.cartItems?.length > 0 && (
                <div className='d-flex justify-content-between align-items-start mt-2'>
                  <div style={{ width: '150px', maxWidth: '100%' }}>
                    <button
                      type='button'
                      className='btn btn-outline-danger text-capitalize'
                      style={{ width: '100%', padding: '9px' }}
                    >
                      Clear Cart
                    </button>
                  </div>
                  <div
                    className='d-flex justify-content-between flex-column'
                    style={{ width: '270px' }}
                  >
                    <div className='d-flex flex-row justify-content-between'>
                      <h5>Subtotal</h5>
                      <h5>${cart?.cartTotalAmount}</h5>
                    </div>
                    <div>
                      <button
                        type='button'
                        className='btn btn-primary text-capitalize mt-2'
                        style={{ width: '100%', padding: '9px' }}
                      >
                        Subtotal
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
