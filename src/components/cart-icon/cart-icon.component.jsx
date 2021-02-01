/** Libraries */
import React, { useContext } from 'react';

/** Context */
import { CartContext } from '../../providers/cart/cart.provider';

/** SVG */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/** Styles */
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
