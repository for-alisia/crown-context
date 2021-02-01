/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/** Context */
import CartProvider from './providers/cart/cart.provider';

/** Components */
import App from './App';

/** Styles */
import './index.css';

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
