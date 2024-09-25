import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isMobileNavOpen: boolean;
  isMobileView: boolean;
  isScrolled: boolean;
  isScrollDisabled: boolean;
  isModalOpen: boolean;
}

const initialState: UIState = {
  isMobileNavOpen: false,
  isMobileView: true,
  isScrolled: false,
  isScrollDisabled: false,
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileNavOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileNavOpen = action.payload;
    },
    setMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobileView = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setScrollDisabled: (state, action: PayloadAction<boolean>) => {
      state.isScrollDisabled = action.payload;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setMobileView, setScrolled, setMobileNavOpen, setScrollDisabled, setModalOpen } = uiSlice.actions;

export default uiSlice.reducer;
