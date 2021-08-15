import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import RadioForSort from "./RadioForSort";
import Posts from "./Posts";
import { getSortedPosts } from "../utils/helper";
import { Container } from "@material-ui/core";

function PostsContainer({ filter, sortBy, posts, changeSortBy }) {
  return (
    <div className="postsContainer">
      <Container>
        <Filter filter={filter} />
        <RadioForSort sortBy={sortBy} changeHandler={changeSortBy} />
        <Posts posts={getSortedPosts(posts, sortBy)} />
      </Container>
    </div>
  );
}

PostsContainer.defaultProps = {
  filter: undefined,
};

PostsContainer.propTypes = {
  sortBy: PropTypes.oneOf(["date", "score"]).isRequired,
  posts: PropTypes.array.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default PostsContainer;
