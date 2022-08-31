// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Custom Imports
import Layout from '../../../components/Layout';
// Icons Imports
import { BsTrash, BsArrowLeft } from 'react-icons/bs';
import './Components/Cart.css';

const Cart = () => {
  return (
    <Layout>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div className='card p-5' style={{ width: '100%' }}>
              <div className='left-wrap'>
                <h5 className='mb-3'>
                  <Link to='/' className='text-body continue'>
                    <BsArrowLeft className='me-2' />
                    Continue shopping
                  </Link>
                </h5>
                <hr />
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <div>
                    <p className='mb-1'>Shopping cart</p>
                    <p className='mb-0'>
                      You have 9{/* {store.cartItems.length} */}
                      items in your cart
                    </p>
                  </div>
                </div>
                {/* {store?.cartItems?.length > 0 ? (
                  store?.cartItems.map((item, index) => ( */}
                <div
                  className='card mb-3 left-card-side'
                  style={{ width: '100%' }}
                  // key={index}
                >
                  <div className='card-body' style={{ width: 'unset' }}>
                    <div className='d-flex justify-content-between left-side'>
                      <div className='d-flex flex-row align-items-center'>
                        <div>
                          <img
                            src='https://www.apple.com/v/iphone-13-pro/a/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg'
                            className='img-fluid rounded-3'
                            alt='Shopping item'
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className='ms-3'>
                          <h5>
                            {/* {item?.title.substring(0, 21)} */}
                            Iphone 13
                          </h5>
                          <p className='small mb-0'>
                            {/* {item?.category} */}
                            electronics
                          </p>
                        </div>
                      </div>
                      <div className='d-flex flex-row align-items-center icon'>
                        {/* <div style={{ width: 50 }}>
                              <h5 className='fw-normal mb-0'>2</h5>
                            </div> */}
                        <div style={{ width: 80 }}>
                          <h5 className='mb-0'>$1200</h5>
                        </div>
                        <button
                          className='fw-bold border-0'
                          style={{
                            color: '#888888',
                            background: 'transparent',
                          }}
                          // onClick={() => deleteItemFromCart(item)}
                        >
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ))
                ) : (
                  <Link to='/' className='btn btn-primary btn-sm mb-3'>
                    Your cart is Empty
                  </Link>
                )} */}
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
