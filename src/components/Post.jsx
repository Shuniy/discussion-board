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

    const cardStyle = {
      display: "block",
      width: "500px",
      transitionDuration: "all 0.3s",
      margin: "1%",
    };

    const contentStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    };

    const actionsStyle = {
      display: "flex",
      justifyContent: "space-between",
    };

    return (
      <div classname="post">
        <Card style={cardStyle} raised>
          <CardContent raised style={contentStyle}>
            <div className="titleAuthor">
              <Link to={`/${category}/${id}`}>
                <Typography variant="h4" component='h3'>
                  <em>{title}</em>
                </Typography>
              </Link>
              <SmallLabel label={`Post by : ${author}`} />
            </div>

            <div className="information">
              <Badge label={category} />
              <Badge
                label="Vote"
                voteCount={voteScore}
              />
              <Typography variant="h6" color="textSecondary">
                <TextTruncate line={1} truncateText="..." text={body} />
              </Typography>
              <SmallLabel label={dateFormat(timestamp)} />
              <CommentCount commentCount={commentCount} />
            </div>
          </CardContent>

          <CardActions raised style={actionsStyle}>
            <EditBadge link={`/${category}/${id}/edit`} />
            <VoteButtons voteUp={this.voteUp} voteDown={this.voteDown} />
            <CloseButton closeHandler={this.deletePost} />
          </CardActions>
        </Card>
      </div>
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
