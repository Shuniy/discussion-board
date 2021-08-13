import React from 'react';
import PropTypes from 'prop-types';
import Radio from "@material-ui/core/Radio";

function RadioForSort({ sortBy, changeHandler }){(
  <div>
    <h3>Sort By</h3>
    <div>
      <label htmlFor="radioDate">
        <Radio
          name="inlineRadioOptions"
          id="radioDate"
          value="date"
          onChange={changeHandler}
          checked={sortBy === "date"}
        />
        <h4>Date</h4>
      </label>
    </div>
    <div>
      <label htmlFor="radioScore">
        <Radio
          name="inlineRadioOptions"
          id="radioScore"
          value="score"
          onChange={changeHandler}
          checked={sortBy === "score"}
        />
        <h4>Score</h4>
      </label>
    </div>
  </div>
);
}
RadioForSort.propTypes = {
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default RadioForSort;
