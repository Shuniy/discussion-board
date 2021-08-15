import React, { Component } from "react";
import Home from "./components/Home";
import { connect } from "react-redux";
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home title="Discussion Board" />
      </div>
    );
  }
}

export default connect()(App);
