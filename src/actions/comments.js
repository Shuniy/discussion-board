// Success is for acknowledgement
// Action we will perform on the comments

// Get all the comments related to that post
export const GET_ALL_COMMENTS_BY_POST_ID = "GET_ALL_COMMENTS_BY_POST_ID";
export const GET_ALL_COMMENTS_BY_POST_ID_RESET =
  "GET_ALL_COMMENTS_BY_POST_ID_RESET";

// Add a comment
export const ADD_COMMENT = "ADD_COMMENT";

// delete a comment
export const DELETE_COMMENT = "DELETE_COMMENT";

// Edit a comment
export const EDIT_COMMENT = "EDIT_COMMENT";
// Upvote a comment
export const UPVOTE_TO_COMMENT = "UPVOTE_TO_COMMENT";

// Downvote a comment
export const DOWNVOTE_TO_COMMENT = "DOWNVOTE_TO_COMMENT";

// action creaters

export const getAllCommentsByPostId = (id) => ({
  type: GET_ALL_COMMENTS_BY_POST_ID,
  id,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

export const deleteComment = (id) => ({
  type: ADD_COMMENT,
  id,
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  comment,
});

export const upVoteToComment = (id) => ({
  type: UPVOTE_TO_COMMENT,
  id,
});

export const downVoteToComment = (id) => ({
  type: DOWNVOTE_TO_COMMENT,
  id,
});
