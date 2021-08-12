import {
  GET_POST_BY_POST_ID,
  GET_POST_BY_POST_ID_FAIL,
  UPVOTE_TO_POST,
  DOWNVOTE_TO_POST,
} from "../actions";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case UPVOTE_TO_POST:
    case DOWNVOTE_TO_POST:
    case GET_POST_BY_POST_ID:
    case GET_POST_BY_POST_ID_FAIL: {
      return { ...action.post };
    }
    default:
      return state;
  }
}
