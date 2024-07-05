import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from './todo.slice'

const reducers = combineReducers({todos: reducer,})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})