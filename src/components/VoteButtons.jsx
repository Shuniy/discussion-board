import React from "react";
import PropTypes from "prop-types";
import VoteButton from "./VoteButton";

function VoteButtons({ voteUp, voteDown }) {
  <div className="">
    <VoteButton clickHandler={voteUp} type="add" />
    <VoteButton clickHandler={voteDown} type="sub" />
  </div>;
}

VoteButtons.propTypes = {
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default VoteButtons;
