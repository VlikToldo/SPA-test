import { createSlice } from "@reduxjs/toolkit";
import { fetchBaseCurrency } from "./operations";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    baseCurrency: '',
  },
  reducer:{
    addBaseCurrency(state, action){
        state.baseCurrency = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action)=> {
        state.baseCurrency = action.payload
    })
  }
});

export const { addBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;