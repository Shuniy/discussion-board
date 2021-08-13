import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

function CloseButton({ closeHandler }) {
  return (
    <Button variant="contained" color="secondary" onClick={closeHandler}>
      <CloseIcon />
    </Button>
  );
}

CloseButton.propTypes = {
  closeHandler: PropTypes.func.isRequired,
};

export default CloseButton;
