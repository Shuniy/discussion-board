import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class CommentEditForm extends Component {
  state = {
    body: this.props.defaultVal,
  };

  changeHandler = (e) => {
    this.setState({ body: e.target.value });
  };

  editComment = (e) => {
    e.preventDefault();
    this.props.editComment(this.state.body);
  };

  render() {
    return (
      <form onSubmit={this.editComment}>
        <div>
          <TextField value={this.state.body} onChange={this.changeHandler} />
          <div>
            <Button color="secondary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

CommentEditForm.propTypes = {
  defaultVal: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
};

export default CommentEditForm;
