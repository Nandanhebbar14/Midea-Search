import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import collectionreducer from './features/collectionSlice'

export const store= configureStore({
  reducer: {
    search: searchReducer,
    collections: collectionreducer
  },
})