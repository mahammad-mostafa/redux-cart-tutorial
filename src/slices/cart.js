import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const states = {
  items: [],
  loading: true,
  quantity: 0,
  total: 0,
  error: '',
};

export const fetcher = createAsyncThunk('cart/fetch', async (_, { rejectWithValue }) => {
  try {
    return (await axios.get('https://course-api.com/react-useReducer-cart-project')).data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const slice = createSlice({
  name: 'cart',
  initialState: states,
  reducers: {
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.amount += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.amount -= 1;
    },
    remove: (state, action) => (
      { ...state, items: state.items.filter((item) => item.id !== action.payload) }
    ),
    calculate: (state) => {
      let quantity = 0;
      let total = 0;
      state.items.forEach((item) => {
        quantity += item.amount;
        total += item.amount * item.price;
      });
      return { ...state, quantity, total };
    },
    clear: (state) => ({ ...state, items: [] }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetcher.fulfilled, (state, action) => {
      const stated = {
        ...state, loading: false, items: action.payload, error: '',
      };
      return stated;
    });
    builder.addCase(fetcher.rejected, (state, action) => {
      const stated = { ...state, loading: false, error: action.error.message };
      return stated;
    });
  },
});

export const {
  increment, decrement, remove, calculate, clear,
} = slice.actions;

export default slice.reducer;
