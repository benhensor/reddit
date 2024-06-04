export interface User {
  id: string;
  name: string;
  karma: number;
  avatar: string;
}

export interface Comment {
  id: string;
  body: string;
  data: {};
}

export interface Post {
  id: string;
  title: string;
  permalink: string;
  showingComments: boolean;
  comments: Comment[];
  loadingComments: boolean;
  errorComments: boolean;
  data: any;
}

export interface RedditsState {
  posts: Post[];
  error: boolean;
  isLoading: boolean;
  searchTerm: string;
  selectedSubreddit: string;
}

export interface Subreddit {
  id: string;
  display_name: string;
  data: any;
}

export interface SubredditsState {
  subreddits: Subreddit[];
  error: boolean;
  isLoading: boolean;
}

export interface RootState {
  reddit: RedditsState;
  subreddits: SubredditsState;
}
