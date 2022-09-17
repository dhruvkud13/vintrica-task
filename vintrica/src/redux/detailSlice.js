import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details:null,
  loading: false,
  error: false,
};

export const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    detailsStart: (state) => {
        state.loading = true;
      },
    detailsSuccess: (state, action) => {
        state.loading = false;
        state.details = action.payload;
      },
      detailsFailure: (state) => {
        state.loading = false;
        state.error = true;
      },
  },
});

export const {detailsStart, detailsSuccess, detailsFailure} =
  detailSlice.actions;

export default detailSlice.reducer;