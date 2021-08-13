import React from "react";
import PropTypes from "prop-types";

function SmallLabel({ label }) {
  return (
    <div>
      <h3 className="text-muted">{label}</h3>
    </div>
  );
}

SmallLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SmallLabel;
