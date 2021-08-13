import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";


function Badge({ label, badgeColor, disabled, voteCount }) {
  const voteBadge = voteCount !== undefined && (
    <h4 className="text-warning"> {voteCount}</h4>
  );

  return (
    <Typography variant='h5'>
      {_.capitalize(label)}
      {voteBadge ? voteBadge : ""}
    </Typography>
  );
}

Badge.defaultProps = {
  label: "",
  badgeColor: "badge-primary",
  disabled: true,
  voteCount: undefined,
};

Badge.propTypes = {
  label: PropTypes.string,
  badgeColor: PropTypes.string,
  disabled: PropTypes.bool,
  voteCount: PropTypes.number,
};

export default Badge;
