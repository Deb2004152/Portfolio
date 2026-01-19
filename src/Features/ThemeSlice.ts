import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  value:  "light" | "dark"
}

const initialState: ThemeState = {
  value: "dark",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.value= state.value === "light" ? "dark" : "light"
    },
  },
})

export const {switchTheme} = themeSlice.actions
export default themeSlice.reducer