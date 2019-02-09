import React, { Component } from "react";
import { connect } from "react-redux";

import { postSmurf, fetchSmurfs, deleteSmurf } from "../actions";
import AddSmurf from "./AddSmurf";
import Smurf from "./Smurf";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  postSmurf = smurf => {
    this.props.postSmurf(smurf);
  };

  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf smurfs={this.props.smurfs} postSmurf={this.postSmurf} />
        <div className="smurf-container">
          {this.props.smurfs.map(smurf => (
            <Smurf
              key={smurf.id}
              smurf={smurf}
              deleteSmurf={this.deleteSmurf}
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
  { postSmurf, fetchSmurfs, deleteSmurf }
)(App);
