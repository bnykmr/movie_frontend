import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./MovieSlice";
import showSlice from "./MovieSlice";







export const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer
  },
  middleware: (getDefault) => getDefault().concat([
    movieSlice.middleware,
  ])
});