import { Subreddit, Post, Comment } from '../redux/types';

const redditURL = 'https://oauth.www.reddit.com';

export const getSubreddits = async (): Promise<Subreddit[]> => {
  try {
    const response = await fetch(`${redditURL}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit: { data: any }) => ({
      id: subreddit.data.id,
      display_name: subreddit.data.display_name,
      data: subreddit.data,
    }));
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    return [];
  }
};

export const getSubredditPosts = async (subreddit: string): Promise<Post[]> => {
  try {
    const response = await fetch(`${redditURL}/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post: { data: any }) => ({
      id: post.data.id,
      title: post.data.title,
      permalink: post.data.permalink,
      showingComments: false,
      comments: [],
      loadingComments: false,
      errorComments: false,
      data: post.data,
    }));
  } catch (error) {
    console.error('Error fetching subreddit posts:', error);
    return [];
  }
};

export const getPostComments = async (permalink: string): Promise<Comment[]> => {
  try {
    const response = await fetch(`${redditURL}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((comment: { data: any }) => ({
      id: comment.data.id,
      body: comment.data.body,
      data: comment.data,
    }));
  } catch (error) {
    console.error('Error fetching post comments:', error);
    return [];
  }
};
