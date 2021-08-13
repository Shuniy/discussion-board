import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import SmallLabel from "./SmallLabel";
import Badge from "./Badge";
import CommentCount from "./CommentCount";
import CloseButton from "./CloseButton";
import VoteButtons from "./VoteButtons";
import EditBadge from "./EditBadge";
import { deletePost, upVoteToPost, downVoteToPost } from "../actions";
import { dateFormat } from "../utils/helper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  };

  voteUp = () => {
    this.props.upVoteToPost(this.props.post.id);
  };

  voteDown = () => {
    this.props.downVoteToPost(this.props.post.id);
  };

  render() {
    const {
      id,
      category,
      title,
      author,
      body,
      timestamp,
      commentCount,
      voteScore,
    } = this.props.post;

    const badgeColor = voteScore >= 10 ? "badge-danger" : "badge-secondary";

    return (
      <Card>
        <CardContent>
          <li className="">
            <div className="">
              <div className="">
                <Link className="" to={`/${category}/${id}`}>
                  <Typography variant='h4'>{title}</Typography>
                </Link>
              </div>
            </div>
            <SmallLabel label={`post by ${author}`} />
            <Badge label={category} />
            <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
            <Typography variant='h6' color='textSecondary' className="">
              <TextTruncate line={1} truncateText="..." text={body} />
            </Typography>
            <div className="">
              <div>
                <SmallLabel label={dateFormat(timestamp)} />
                <CommentCount commentCount={commentCount} />
              </div>
            </div>
          </li>
        </CardContent>

        <CardActions>
          <EditBadge link={`/${category}/${id}/edit`} />
          <VoteButtons voteUp={this.voteUp} voteDown={this.voteDown} />
          <CloseButton closeHandler={this.deletePost} />
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost, upVoteToPost, downVoteToPost })(
  Post
);
