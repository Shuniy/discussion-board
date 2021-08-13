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
      <div className="">
        <div className="">
          <Typography>
            <strong>{body}</strong>
          </Typography>
        </div>
      </div>
    );

    const badgeColor = voteScore >= 10 ? "badge-danger" : "badge-secondary";
    return (
      <Card className="">
        <CardContent>
          {renderCommentBody}
          <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
          <Typography className="text-muted">
            {dateFormatGlobal(timestamp)}
          </Typography>
          <Typography className="text-muted">commented by {author}</Typography>
        </CardContent>

        <CardActions>
          <VoteButtons voteUp={this.upVote} voteDown={this.downVote} />
          <CloseButton
            closeStyle="text-muted"
            closeHandler={this.deleteComment}
          />
          <Button
            className=""
            color="primary"
            variant="contained"
            onClick={this.editMode}
          >
            Edit
          </Button>
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
