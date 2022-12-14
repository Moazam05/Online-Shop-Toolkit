// React Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Custom Imports
import Cart from './pages/views/Cart';
import Home from './pages/views/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer autoClose={2000} position={'top-center'} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        {/* 404 Page */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
