import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';
import { RedditsState, Post, RootState } from './types';
import { AppDispatch } from './store';

const initialState: RedditsState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
};

const redditsSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    startGetPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit(state, action: PayloadAction<string>) {
      state.selectedSubreddit = action.payload;
      state.searchTerm = '';
    },
    toggleShowingComments(state, action: PayloadAction<number>) {
      const post = state.posts[action.payload];
      post.showingComments = !post.showingComments;
    },
    // startGetComments(state, action: PayloadAction<number>) {
    //   const post = state.posts[action.payload];
    //   post.showingComments = !post.showingComments;
    //   if (!post.showingComments) {
    //     return;
    //   }
    //   state.posts[action.payload].loadingComments = true;
    //   state.posts[action.payload].error = false;
    // },
    startGetComments(state, action: PayloadAction<number>) {
      const post = state.posts[action.payload];
      post.loadingComments = true;
      post.errorComments = false;
    },
    getCommentsSuccess(state, action) {
      const { index, comments } = action.payload;
      state.posts[index].loadingComments = false;
      state.posts[index].comments = comments;
    },
    getCommentsFailed(state, action: PayloadAction<number>) {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].errorComments = true;
    },
  },
});

export const {
  setPosts,
  getPostsFailed,
  getPostsSuccess,
  startGetPosts,
  setSearchTerm,
  setSelectedSubreddit,
  toggleShowingComments,
  getCommentsFailed,
  getCommentsSuccess,
  startGetComments,
} = redditsSlice.actions;

export default redditsSlice.reducer;

// Thunks
export const fetchPosts = (subreddit: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};

export const fetchComments = (index: number, permalink: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startGetComments(index));
    const comments = await getPostComments(permalink);
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (error) {
    dispatch(getCommentsFailed(index));
  }
};

// Selectors
export const selectPosts = (state: RootState) => state.reddit.posts;
export const selectSearchTerm = (state: RootState) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state: RootState) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return posts;
  }
);