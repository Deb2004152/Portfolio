import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Features/ThemeSlice'
import sidebarReducer from './Features/SidebarSlice'

export const store = configureStore({
  reducer: {
     theme: themeReducer,
     sidebar: sidebarReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;