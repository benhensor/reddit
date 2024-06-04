import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';
import { SubredditsState, Subreddit, RootState } from './types';
import { AppDispatch } from './store';

const initialState: SubredditsState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

const subRedditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action: PayloadAction<Subreddit[]>) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetSubreddits,
} = subRedditsSlice.actions;

export default subRedditsSlice.reducer;

// This is a Redux Thunk that gets subreddits.
export const fetchSubreddits = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startGetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

// Selectors
export const selectSubreddits = (state: RootState) => state.subreddits.subreddits;