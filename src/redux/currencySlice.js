import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchChangeCurrency,
  fetchLatestRates,
} from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    result: '',
    rates: '',
    isLoading: false,
  },
  reducer: {
    addBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchChangeCurrency.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChangeCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchLatestRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLatestRates.pending, state => {
        state.isLoading = true;
      });
  },
});

export const { addBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
