import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { get, ref } from "firebase/database";

const initialState = {
  listCategories: [],
  isLoading: false,
};

const getAllCategories = createAsyncThunk(
  "categories",
  async (_, { rejectWithValue }) => {
    try {
      const categoriRef = ref(db, "categories");
      return get(categoriRef).then((snapshot) => {
        if (snapshot.exists()) {
          const arrayCategory = Object.entries(snapshot.val()).map(
            ([id, data]) => ({ id, ...data })
          );
          return arrayCategory;
        } else {
          console.log("no fatch");
        }
      });
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
        state.listCategories = action.payload;
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
