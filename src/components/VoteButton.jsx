import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';

function VoteButton({ clickHandler, type }){
  return <Button color='primary' variant='contained' onClick={clickHandler}>
    {type === 'add' ? <AddIcon/> : <RemoveIcon />}
  </Button>
}


VoteButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default VoteButton;
