// Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Service Imports
import { httpService } from '../../../../services/api';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loader: false,
  },

  reducers: {
    productsData: (state, action) => {
      state.items = action.payload;
    },

    loadingStatus: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { productsData, loadingStatus } = productsSlice.actions;

export default productsSlice.reducer;

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async (params, { dispatch }) => {
    dispatch(loadingStatus(true));
    const response = await httpService(
      'GET',
      'http://localhost:5000/products',
      '',
      ''
    );
    if (response.status === 200) {
      dispatch(loadingStatus(false));
      dispatch(productsData(response?.data));
    } else {
      dispatch(loadingStatus(false));
      dispatch(productsData([]));
    }
  }
);
