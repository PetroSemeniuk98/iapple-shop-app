import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../../firebase";
import { get, ref } from "firebase/database";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProductId: builder.query({
      async queryFn({ id }) {
        try {
          const dbRef = ref(db, `products/${id}`);
          const snapshot = await get(dbRef);
          if (snapshot.exists()) {
            return { data: snapshot.val() };
          } else {
            return { error: "No data available" };
          }
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetProductIdQuery } = apiSlice;
