import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import redditReducer from './redditsSlice';
import subRedditsReducer from './subRedditsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  reddit: redditReducer,
  subreddits: subRedditsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;