import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      {/* 404 Page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
