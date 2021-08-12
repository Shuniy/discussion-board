import {
  GET_POSTS_BY_CATEGORY,
  DELETE_POST,
  UPVOTE_TO_POST,
  DOWNVOTE_TO_POST,
  ADD_POST,
} from "../actions";

export default function postsReducer(state = {}, action){
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY: {
      const { category, posts } = action;
      return { ...state, [category]: posts };
    }
    case DELETE_POST: {
      const { id, category } = action.post;
      const rest = state[category].filter((post) => post.id !== id);

      return { ...state, [category]: rest };
    }
    case UPVOTE_TO_POST:
    case DOWNVOTE_TO_POST: {
      const { id, category } = action.post;
      if (state[category] && state[category].length > 0) {
        const newPosts = state[category].map((post) =>
          post.id === id ? action.post : post
        );
        return { ...state, [category]: newPosts };
      }
      return state;
    }
    case ADD_POST: {
      const { post } = action;
      const newPosts = state[post.category].push(post);
      return { ...state, [post.category]: newPosts };
    }
    default:
      return state;
  }
};
