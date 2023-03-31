import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import questaosReducer from './reducers/questoes'

const store = configureStore({
  reducer: {
    questoes: questaosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
