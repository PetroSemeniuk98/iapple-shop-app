import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";

let combiner = combineReducers({
  categoriesReducer,
});

export const store = configureStore({
  reducer: combiner,
  devTools: true,
});
