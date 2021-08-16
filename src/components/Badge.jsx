import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Typography from "@material-ui/core/Typography";

function Badge({ label, voteCount }) {
  return (
    <Typography style={{ fontSize: "16px", fontStyle: "italic" }}>
      {voteCount ? (
        <div>
          <strong>
            {_.capitalize(label)}s : {voteCount}
          </strong>
        </div>
      ) : (
        <div>
          <strong>Category : {_.capitalize(label)}</strong>
        </div>
      )}
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
