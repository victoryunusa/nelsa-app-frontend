import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import addressService from "./addressService";

const initialState = {
  addresses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAddresses = createAsyncThunk(
  "api/address",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const b_id = thunkAPI.getState().auth.user.user.business[0].id;
      return await addressService.getAddresses(token, b_id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addresses = action.payload;
      })
      .addCase(getAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.addresses = [];
      });
  },
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
