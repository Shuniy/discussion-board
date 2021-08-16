import React, { Component } from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";
import CloseButton from "./CloseButton";
import CommentEditForm from "./CommentEditForm";
import VoteButtons from "./VoteButtons";
import { dateFormatGlobal } from "../utils/helper";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

class Comment extends Component {
  state = {
    editMode: false,
  };

  upVote = () => {
    this.props.upVote(this.props.comment.id);
  };

  downVote = () => {
    this.props.downVote(this.props.comment.id);
  };

  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id);
  };

  editComment = (body) => {
    this.props.editComment({
      id: this.props.comment.id,
      body,
    });
    this.setState({ editMode: false });
  };

  editMode = () => {
    this.setState({ editMode: true });
  };

  render() {
    const { body, voteScore, author, timestamp } = this.props.comment;

    const renderCommentBody = this.state.editMode ? (
      <CommentEditForm defaultVal={body} editComment={this.editComment} />
    ) : (
      <Typography style={{fontSize:'19px'}} component='em'>
        <strong>{body}</strong>
      </Typography>
    );
    return (
      <Card style={{ marginBottom: "2%" }} raised>
        <CardContent raised>
          {renderCommentBody}
          <Typography variant='body2'>commented by {author}</Typography>
          <Badge label="Vote" voteCount={voteScore} />
          <Typography variant='body2'>{dateFormatGlobal(timestamp)}</Typography>
        </CardContent>

        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
          raised
        >
          <Button color="primary" variant="contained" onClick={this.editMode}>
            Edit
          </Button>
          <VoteButtons voteUp={this.upVote} voteDown={this.downVote} />
          <CloseButton
            closeStyle="text-muted"
            closeHandler={this.deleteComment}
          />
        </CardActions>
      </Card>
    );
  }
}

Comment.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

export default Comment;
