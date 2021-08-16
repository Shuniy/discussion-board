import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function CommentCount({ commentCount }) {
  const appendS = commentCount !== 1 && "s";
  return (
    <div>
      <Typography>
        <strong>
          {commentCount} comment{appendS}
        </strong>
      </Typography>
    </div>
  );
}

CommentCount.defaultProps = {
  commentCount: 0,
};

CommentCount.propTypes = {
  commentCount: PropTypes.number,
};

export default CommentCount;
