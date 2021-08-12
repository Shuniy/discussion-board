import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import AllPosts from "./routes/AllPosts";
import PostsByCategory from "./routes/PostsByCategory";
import NewPost from "./routes/NewPost";
import PostDetailPage from "./routes/PostDetailPage";
import EditPost from "./routes/EditPost";
import NotFound from "./routes/NotFound";
import {getAllCategories, getPostsByCategory} from './utils/api'

class App extends Component {
  render() {
    console.log(getAllCategories())
    console.log(getPostsByCategory('react'));
    return (
      <div className="App">
        <Navbar title="Discussion Board" />

        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/:category" component={PostsByCategory} />
          <Route exact path="/:category/:postId" component={PostDetailPage} />
          <Route exact path="/:category/:postId/edit" component={EditPost} />
          <Route exact path="/error/:errMsg" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
