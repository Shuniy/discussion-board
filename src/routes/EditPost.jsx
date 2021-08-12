import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PostForm from "../components/PostForm";
import NotFound from "./NotFound";
import { getPostByPostId, editPostByPostId } from "../actions";

class EditPost extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.getPostById(this.props.match.params.postId);
  }

  editPost = ({ id, title, body }) => {
    this.props.editPost({ id, title, body });
  };

  render() {
    const { post } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (post === {}) {
      return <NotFound />;
    }

    return (
      <div className="editPostContainer">
        <PostForm submitPost={this.editPost} post={post} isNew={false} />
      </div>
    );
  }
}

EditPost.defaultProps = {
  post: {},
};

EditPost.propTypes = {
  post: PropTypes.object,
  getPostByPostId: PropTypes.func.isRequired,
  editPostByPostId: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

const mapDispatchToProps = (dispatch) => ({
  getPostById: (data) => dispatch(getPostByPostId(data)),
  editPost: ({ id, title, body }) => {
    editPostByPostId({ id, title, body });
    this.setState({ redirect: true });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
