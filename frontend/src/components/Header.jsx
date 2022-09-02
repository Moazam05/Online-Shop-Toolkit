// React Imports
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Icons Imports
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  const cart = useSelector((state) => state?.cart);
  const navigate = useNavigate();

  const cartStyle = {
    position: 'absolute',
    top: '-9px',
    left: '22px',
    color: '#fff',
    background: '#FF9F1A',
    borderRadius: '50%',
    padding: '0px 6px',
    fontSize: '12px',
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary shadow-lg p-2 px-5'>
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bold' to='/'>
          Online Shop
        </Link>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FaBars color='white' />
        </button>
        <div className='navbar-collapse collapse' id='navbarColor01'>
          <ul className='navbar-nav ms-auto align-items-center mobile-nav'>
            <li
              className='nav-item d-flex position-relative'
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/cart')}
            >
              <AiOutlineShoppingCart
                color='white'
                fontSize={20}
                className='ms-2 fw-bold'
              />
              <div style={cartStyle}>{cart?.cartItems.length}</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
