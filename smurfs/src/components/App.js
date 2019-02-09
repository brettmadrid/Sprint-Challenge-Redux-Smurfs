import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="smurf-container">
          {this.props.smurfs.map(smurf => (
            <Smurf
              key={smurf.name}
              smurf={smurf}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mstp,
  { fetchSmurfs }
)(App);
