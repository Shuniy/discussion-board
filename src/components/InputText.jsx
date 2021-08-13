import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function InputText({ id, value, handleChange, required, disabled }) {
  return (
    <div className="form-group">
      <Typography variant="h5">
        <label htmlFor={id}>{_.capitalize(id)}</label>
      </Typography>

      <TextField
        label={value}
        variant="outlined"
        className=""
        id={id}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => handleChange(e, id)}
        placeholder={`Enter ${_.capitalize(id)}`}
      />
    </div>
  );
}

InputText.defaultProps = {
  required: true,
  disabled: false,
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputText;
