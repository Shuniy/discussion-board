import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditBadge from "./EditBadge";
import Badge from "./Badge";
import CloseButton from "./CloseButton";
import CommentCount from "./CommentCount";
import VoteButtons from "./VoteButtons";
import { deletePost, upVoteToPost, downVoteToPost } from "../actions";
import { dateFormat } from "../utils/helper";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

class PostDetail extends Component {
  state = {
    redirect: false,
  };
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.setState({ redirect: true });
  };

  voteUp = () => {
    const { id } = this.props.post;
    this.props.upVoteToPost(id);
  };

  voteDown = () => {
    const { id } = this.props.post;
    this.props.downVoteToPost(id);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const {
      id,
      title,
      category,
      body,
      author,
      timestamp,
      voteScore,
      commentCount,
    } = this.props.post;

    return (
      <Card raised>
        <CardContent raised>
          <div>
            <Typography variant="h4">{title}</Typography>
          </div>
          <Typography>Post By {author}</Typography>
          <Typography>{dateFormat(timestamp)}</Typography>
          <div>
            <Badge label={category} />
            <Badge label="Vote" voteCount={voteScore} />
          </div>
          <div>
            <Typography>{body}</Typography>
          </div>
          <div>
            <CommentCount commentCount={commentCount} />
          </div>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
          raised
        >
          <EditBadge link={`/${category}/${id}/edit`} />
          <VoteButtons voteUp={this.voteUp} voteDown={this.voteDown} />
          <CloseButton closeHandler={this.deletePost} />
        </CardActions>
      </Card>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, {
  deletePost,
  upVoteToPost,
  downVoteToPost,
})(PostDetail);
