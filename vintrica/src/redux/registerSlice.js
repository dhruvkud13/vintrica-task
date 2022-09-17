import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration:null,
  loading: false,
  error: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationStart: (state) => {
        state.loading = true;
      },
    registrationSuccess: (state, action) => {
        state.loading = false;
        state.registration = action.payload;
      },
      registrationFailure: (state) => {
        state.loading = false;
        state.error = true;
      },
  },
});

export const {registrationStart, registrationSuccess, registrationFailure} =
  registrationSlice.actions;

export default registrationSlice.reducer;