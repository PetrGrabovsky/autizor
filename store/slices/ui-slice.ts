import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isMobileNavOpen: boolean;
  isMobileView: boolean;
  isScrolled: boolean;
  isScrollDisabled: boolean;
}

const initialState: UIState = {
  isMobileNavOpen: false,
  isMobileView: true,
  isScrolled: false,
  isScrollDisabled: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setMobileNavOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileNavOpen = action.payload;
    },
    setMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobileView = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setDisableScroll: (state, action: PayloadAction<boolean>) => {
      state.isScrollDisabled = action.payload;
    },
  },
});

export const { toggleMobileNav, setMobileView, setScrolled, setMobileNavOpen, setDisableScroll } = uiSlice.actions;
export default uiSlice.reducer;
