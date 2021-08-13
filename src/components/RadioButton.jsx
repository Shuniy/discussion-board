import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Radio from "@material-ui/core/Radio";

function RadioButton({ evtName, val, handleChange, checked, disabled }) {
  return (
    <label htmlFor={val} style={{ width: "100px" }}>
      <Radio
        id={val}
        value={val}
        onChange={(e) => handleChange(e, evtName)}
        checked={checked}
        disabled={disabled}
      />
      <h4>{_.capitalize(val)}</h4>
    </label>
  );
}

RadioButton.propTypes = {
  evtName: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RadioButton;
