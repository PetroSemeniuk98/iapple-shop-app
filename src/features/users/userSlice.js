import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
  cart: [],
  isLoading: false,
};

// const getAllCategories = createAsyncThunk(
//   "categories",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = (await axios(`${BASE_URLS}/product-categories`)).data;
//       return data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.alert);
//     }
//   }
// );

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addQuantity: (state, { payload }) => {
      let newCart = [];

      const found = newCart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? {
                ...item,
                quantity: payload.quantity || item.quantity + 1,
              }
            : item;
        });
      } else newCart.push({ payload, quantity: 1 });

      state.cart = newCart;
    },
  },
  //   extraReducers: (bulger) => {
  //     bulger
  //       .addCase(getAllCategories.fulfilled, (state, action) => {
  //         state.listCategories = action.payload;
  //         state.isLoading = false;
  //       })
  //       .addCase(getAllCategories.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(getAllCategories.rejected, (state) => {
  //         state.isLoading = false;
  //         console.log("Is not working!");
  //       });
  //   },
});

const {
  reducer: usersReducer,
  actions: { addQuantity },
} = userSlice;

const userAction = { addQuantity };

export { usersReducer, userAction };
