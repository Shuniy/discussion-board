import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

function SmallLabel({ label }) {
  return (
    <div>
      <Typography variant='h6'>
        {label}
      </Typography>
    </div>
  );
}

SmallLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SmallLabel;
