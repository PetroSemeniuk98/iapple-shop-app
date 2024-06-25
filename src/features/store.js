import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";
import { productsReducer } from "./products/productsSlice";
import { apiSlice } from "./api/apiSlise";
import { usersReducer } from "./users/userSlice";

let combiner = combineReducers({
  categoriesReducer,
  productsReducer,
  usersReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: combiner,
  devTools: true,
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});
