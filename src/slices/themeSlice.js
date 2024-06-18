import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
  isScrolled: false,
};

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    searchMode: (state, action) => {
      state.isSearch = action.payload; // true || false
    },
    scrollMode: (state, action) => {
      state.isScrolled = action.payload; // true || false
    },
  },
});

export const getIsSearch = (state) => state.themes.isSearch;
export const getIsScrolled = (state) => state.themes.isScrolled;

export default themeSlice.reducer;
