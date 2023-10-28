import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  image: "",
  builder: [],
};

export const buildPcSlice = createSlice({
  name: "buildPc",
  initialState,
  reducers: {
    addToBuildPc: (state, action) => {
      // console.log(action.payload.category);
      const exist = state.builder.some(
        (obj) => obj.category === action.payload.category
      );
      const index = state.builder.findIndex(
        (obj) => obj.category === action.payload.category
      );
      if (exist && index !== -1) {
        state.builder[index] = action.payload;
      } else {
        state.builder = [...state.builder, action.payload];
      }
    },
    removeBuildPc: (state) => {
      state.builder = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBuildPc, removeBuildPc } = buildPcSlice.actions;

export default buildPcSlice.reducer;
