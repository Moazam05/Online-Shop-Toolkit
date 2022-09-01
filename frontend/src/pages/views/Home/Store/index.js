import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// React Toastify
import { toast } from 'react-toastify';

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      return response?.data;
    } catch (error) {
      toast.error(error.response.statusText);
      return rejectWithValue(error.response.statusText);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
    error: null,
  },

  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { productsData, productsStatus } = productsSlice.actions;

export default productsSlice.reducer;
