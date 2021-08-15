import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

function InputArea({ id, value, handleChange, required, label, disabled }) {
  return (
    <div className="inputArea">
      <Typography variant="h5">
        <label htmlFor={id}>
          <strong>
            <em>{_.capitalize(label)}</em>
          </strong>
        </label>
      </Typography>
      <TextField
        style={{ marginTop: "2%", width: "100%" }}
        id={id}
        label={label}
        variant="filled"
        multiline
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => handleChange(e, id)}
        placeholder={`Enter ${_.capitalize(label)}`}
      />
    </div>
  );
}

InputArea.defaultProps = {
  required: true,
  disabled: false,
};

InputArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputArea;
