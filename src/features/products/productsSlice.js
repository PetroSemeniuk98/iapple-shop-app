import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { suffle } from "../../utils/common";
// import axios from "axios";
// import { BASE_URLS } from "../../utils/constants";

import { get, ref } from "firebase/database";
import { db } from "../../firebase";

const initialState = {
  list: [],
  filtered: [],
  related: [],
  isLoading: false,
};

const getProducts = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      const productRef = ref(db, "products");

      return get(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          const arrProd = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          return arrProd;
        } else {
          console.log("Petro,error!");
        }
      });
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.alert);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredProductByPrice: (state, action) => {
      state.filtered = state.list.filter(({ price }) => price < action.payload);
    },
    filteredProductRelatedByID: (state, { payload }) => {
      const lists = state.list.filter(({ category: { id } }) => id === payload);
      state.related = suffle(lists);
    },
  },
  extraReducers: (bulger) => {
    bulger
      .addCase(getProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        console.log("Is not working!");
      });
  },
});

const {
  reducer: productsReducer,
  actions: { filteredProductByPrice, filteredProductRelatedByID },
} = productsSlice;

const productAction = {
  getProducts,
  filteredProductByPrice,
  filteredProductRelatedByID,
};

export { productsReducer, productAction };
