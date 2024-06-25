import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URLS } from "../../utils/constants";

const initialState = {
  list: [],
  isLoading: false,
};

const getAllCategories = createAsyncThunk(
  "categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = (await axios(`${BASE_URLS}/product-categories`)).data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.alert);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (bulger) => {
    bulger
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false;
        console.log("Is not working!");
      });
  },
});

const { reducer: categoriesReducer } = categoriesSlice;

const categAction = {
  getAllCategories,
};

export { categoriesReducer, categAction };
