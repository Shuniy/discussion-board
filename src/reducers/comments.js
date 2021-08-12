import {
  GET_ALL_COMMENTS_BY_POST_ID,
  GET_ALL_COMMENTS_BY_POST_ID_RESET,
  EDIT_COMMENT,
  UPVOTE_TO_COMMENT,
  DOWNVOTE_TO_COMMENT,
} from "../actions";

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_COMMENTS_BY_POST_ID:
      const { comments } = action;
      return [...comments];

    case GET_ALL_COMMENTS_BY_POST_ID_RESET:
      return [];

    case UPVOTE_TO_COMMENT:
    case DOWNVOTE_TO_COMMENT:
    case EDIT_COMMENT:
      const newComments = state.map((comment) => {
        if (comment.id === action.comment.id) {
          return action.comment;
        }
        return comment;
      });
      return [...newComments];

    default:
      return state;
  }
}
