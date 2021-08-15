import React from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import { Typography } from "@material-ui/core";

function RadioForSort({ sortBy, changeHandler }) {
  return (
    <div className="radioForSort">
      <Typography variant="h5">
        <strong>Sort By</strong>
      </Typography>
      <div>
        <label htmlFor="radioDate">
          <div className="radioForSortButton">
            <Radio
              name="inlineRadioOptions"
              id="radioDate"
              value="date"
              onChange={changeHandler}
              checked={sortBy === "date"}
            />
            <h4>Date</h4>
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="radioScore">
          <div className="radioForSortButton">
            <Radio
              name="inlineRadioOptions"
              id="radioScore"
              value="score"
              onChange={changeHandler}
              checked={sortBy === "score"}
            />
            <h4>Score</h4>
          </div>
        </label>
      </div>
    </div>
  );
}
RadioForSort.propTypes = {
  sortBy: PropTypes.oneOf(["date", "score"]).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default RadioForSort;
