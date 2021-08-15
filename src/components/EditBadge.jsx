import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function EditBadge({ link }) {
  return (
    <Link to={link}>
      <Button variant="contained" color="secondary">
        Edit
      </Button>
    </Link>
  );
}

EditBadge.propTypes = {
  link: PropTypes.string.isRequired,
};

export default EditBadge;
