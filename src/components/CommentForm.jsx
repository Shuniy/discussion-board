import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";

const defaultState = {
  comment: "",
  author: "",
};

class CommentForm extends Component {
  state = defaultState;

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      body: this.state.comment,
      author: this.state.author,
    };
    this.props.addComment(comment);
    this.setState(defaultState);
  };

  render() {
    const { author, comment } = this.state;
    return (
      <Card>
        <CardContent>
          <form className="my-4" onSubmit={this.handleSubmit}>
            <InputText
              id="comment"
              value={comment}
              required
              disabled={false}
              handleChange={this.handleChange}
            />
            <InputText
              id="author"
              value={author}
              required
              disabled={false}
              handleChange={this.handleChange}
            />
            <CardActions>
              <div className="mt-4">
                <Button color="primary" variant="contained" type="submit">
                  Add Comment
                </Button>
              </div>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
