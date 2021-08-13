import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSortBy } from "../actions";
import PostsContainer from "../components/PostsContainer";

class AllPosts extends Component {
  render() {
    const { posts, categories, sortBy, changeSortBy } = this.props;
    const allPosts = [];

    if (categories.length > 0 && posts) {
      categories.forEach((category) => {
        if (posts[category] && posts[category].length > 0) {
          posts[category].forEach((post) => allPosts.push(post));
        }
      });
    }

    return (
      <div className="postContainer">
        {allPosts.length > 0 ? (
          <PostsContainer
            sortBy={sortBy}
            posts={allPosts}
            changeSortBy={changeSortBy}
          />
        ) : (
          <p>No Posts Found!</p>
        )}
      </div>
    );
  }
}

AllPosts.propTypes = {
  posts: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(["date", "score"]).isRequired,
  setSortBy: PropTypes.func.isRequired,
};

function mapStateToProps({ posts, categories, sortBy }) {
  return {
    posts,
    categories,
    sortBy,
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeSortBy: (event) => dispatch(setSortBy(event.target.value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
