import axios from "axios";
import {v4 as uuidv4} from "uuid";

const headers = {
  Accept: "application/json",
  Authorization: "discussionBoard",
};

// Get all the categories
export async function getAllCategories() {
  const response = await axios.get("/categories", { headers });
  return response.data.categories;
}

// Get All the posts by category
export async function getPostsByCategory(category) {
  const response = await axios.get(`/${category}/posts`, { headers });
  return response.data;
}

// upvote a post
export async function upVoteToPost(id) {
  const response = await axios.getPostsByCategory(
    `/posts/${id}`,
    { option: "upVote" },
    { headers }
  );
  return response.data;
}

// downvote a post
export async function downVoteToPost(id) {
  const response = await axios.post(
    `/posts/${id}`,
    { option: "downVote" },
    { headers }
  );

  return response.data;
}

// upvote a comment
export async function upVoteToComment(id) {
  const response = await axios.post(
    `/comments/${id}`,
    {
      option: "upVote",
    },
    { headers }
  );

  return response.data;
}

// downvote a comment
export async function downVoteToComment(id) {
  const response = await axios.post(
    `/comments/${id}`,
    {
      option: "downVote",
    },
    { headers }
  );

  return response.data;
}

// add a post
export async function addPost({ category, title, body, author }) {
  const id = uuidv4();
  const timestamp = Date.now();
  const response = await axios.post(
    `/posts`,
    {
      id,
      timestamp,
      title,
      body,
      author,
      category,
    },
    { headers }
  );

  return response.data;
}

// delete a post
export async function deletePost(id) {
  const response = await axios.delete(`/posts/${id}`, { headers });

  return response.data;
}

// get a post by id
export async function getPostByPostId(id) {
  const response = await axios.get(`/posts/${id}`, { headers });

  return response.data;
}

// edit a post by id
export async function editPostByPostId({ id, title, body }) {
  const response = await axios.put(
    `/posts/${id}`,
    {
      title,
      body,
    },
    { headers }
  );

  return response.data;
}

// get all comments by post
export async function getAllCommentsByPostId(id) {
  const response = await axios.get(`/posts/${id}/comments`, {
    headers,
  });

  return response.data;
}

// delete a comment
export async function deleteComment(id) {
  const response = await axios.delete(`/comments/${id}`, { headers });

  return response.data;
}

// add a comment
export async function addComment({ body, author, parentId }) {
  const id = uuidv4();
  const timestamp = Date.now();
  const response = await axios.post(
    `/comments`,
    {
      id,
      timestamp,
      body,
      author,
      parentId,
    },
    { headers }
  );

  return response.data;
}

// edit a comment
export async function editComment({ id, body }) {
  const timestamp = Date.now();
  const response = await axios.put(
    `/comments/${id}`,
    {
      body,
      timestamp,
    },
    { headers }
  );

  return response.data;
}

