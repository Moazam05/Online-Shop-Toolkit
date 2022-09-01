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
      return rejectWithValue(error.response.statusText);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state) => {
      state.loading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload);
    },
  },
});

export const { productsData, productsStatus } = productsSlice.actions;

export default productsSlice.reducer;
