import React from "react";
import PropTypes from "prop-types";
import VoteButton from "./VoteButton";

function VoteButtons({ voteUp, voteDown }) {
  return (
    <div className="voteButtons">
      <div>
        <VoteButton clickHandler={voteDown} type="sub" />
      </div>
      <div style={{ marginLeft: "3%" }}>
        <VoteButton clickHandler={voteUp} type="add" />
      </div>
    </div>
  );
}

VoteButtons.propTypes = {
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default VoteButtons;
