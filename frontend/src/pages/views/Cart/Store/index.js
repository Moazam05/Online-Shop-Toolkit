// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // If Product found in cart then only increase quantity
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `${state.cartItems[itemIndex].title.substring(
            0,
            11
          )} increase quantity`,
          {
            position: 'top-center',
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `${action.payload.title.substring(0, 11)} Added To Cart`,
          {
            position: 'top-center',
          }
        );
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
