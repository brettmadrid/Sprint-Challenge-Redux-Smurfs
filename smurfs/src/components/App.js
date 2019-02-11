import React, { Component } from "react";
import { connect } from "react-redux";

import { postSmurf, fetchSmurfs, deleteSmurf, updateSmurf, showForm } from "../actions";
import AddSmurf from "./AddSmurf";
import UpdateSmurf from "./UpdateSmurf"
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
    this.props.deleteSmurf(id);
  };

  showForm = id => {
    this.props.showForm(id)
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {/* render add form or update form depending on flag */}
        {this.props.addFormVisible ? (
          <AddSmurf smurfs={this.props.smurfs} postSmurf={this.postSmurf} />
        ) : (
          <UpdateSmurf smurfs={this.props.smurfs} />
        )}

        <div className="smurf-container">
          {this.props.smurfs.map(smurf => (
            <Smurf
              key={smurf.id}
              smurf={smurf}
              deleteSmurf={this.deleteSmurf}
              showForm={this.showForm}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    addFormVisible: state.addFormVisible,
    id: state.id
  };
};

export default connect(
  mstp,
  { postSmurf, fetchSmurfs, deleteSmurf, updateSmurf, showForm }
)(App);
