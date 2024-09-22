import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isMobileNavOpen: boolean;
}

const initialState: UIState = {
  isMobileNavOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
  },
});

export const { toggleMobileNav } = uiSlice.actions;
export default uiSlice.reducer;
