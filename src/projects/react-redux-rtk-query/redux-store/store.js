import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./itemsApi";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [itemsApi.reducerPath]: itemsApi.reducer,
    // [usersApi.reducerPath]: usersApi.reducer,
    // [postsApi.reducerPath]: postsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
  // getDefaultMiddleware().concat(
  //   itemsApi.middleware,
  //   usersApi.middleware,
  //   postsApi.middleware
  // ),
  //   .concat(itemsApi.middleware)
  //   .concat(usersApi.middleware)
  //   .concat(postsApi.middleware)
});
