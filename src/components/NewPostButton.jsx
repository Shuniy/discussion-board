import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function NewPostButton() {
  return (
    <div className="newPostButton">
      <Link to="/new">
        <Button variant="contained" color="secondary">
          New Post
        </Button>
      </Link>
    </div>
  );
}

export default NewPostButton;
