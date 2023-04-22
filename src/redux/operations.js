import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCurrency, latestRates, userInfo } from 'service/api';

export const fetchBaseCurrency = createAsyncThunk(
  'baseCurrency/fetchBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const data = await userInfo(crd);

      return data.results[0].annotations.currency.iso_code;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchChangeCurrency = createAsyncThunk(
  'change/fetchChangeCurrency',
  async (credentials, thunkAPI) => {
    try {
      const { result } = await changeCurrency(credentials);

      return result;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLatestRates = createAsyncThunk(
  'rates/fetchLatestRates',
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const { rates } = await latestRates(baseCurrency);

      return rates;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
