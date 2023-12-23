import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      < AllProducts />
    </CartProvider>
  );
}

export default App;
