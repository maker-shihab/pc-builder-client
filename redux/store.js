import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import buildPcReducer from "./services/buildPcSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    buildPc: buildPcReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
