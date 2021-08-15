import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function InputText({ id, value, handleChange, required, disabled }) {
  return (
    <div className="inputText">
      <Typography variant="h6">
        <label htmlFor={id}>
          <strong>
            <em>{_.capitalize(id)}</em>
          </strong>
        </label>
      </Typography>

      <TextField
        style={{ marginTop: "2%", width: "100%" }}
        label={value}
        variant="outlined"
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
