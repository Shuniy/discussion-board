import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";

function Badge({ label, voteCount }) {
  const voteBadge = voteCount !== undefined && <h4> {voteCount}</h4>;

  return (
    <Typography variant="h6">
      <div>{_.capitalize(label)}</div>
      {voteBadge ? voteBadge : <div></div>}
    </Typography>
  );
}

Badge.defaultProps = {
  label: "",
  voteCount: undefined,
};

Badge.propTypes = {
  label: PropTypes.string,
  voteCount: PropTypes.number,
};

export default Badge;
