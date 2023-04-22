import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo } from 'service/api';

export const fetchBaseCurrency = createAsyncThunk(
  'baseCurrency/fetchBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const data  = await userInfo(crd);
        console.log(data.results[0].annotations.currency.iso_code)
      return data.results[0].annotations.currency.iso_code;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);