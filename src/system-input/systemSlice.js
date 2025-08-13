import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal:false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowModal } = actions;

export default reducer;