import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../slices/carSlice";
import themeSlice from "../slices/themeSlice";

export const store = configureStore({
  reducer: {
    cars: carSlice,
    themes: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // warn: fixing seriable check in payload datetime
    }),
});
