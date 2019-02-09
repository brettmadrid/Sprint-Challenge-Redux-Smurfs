import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideForm, updateSmurf } from '../actions'

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    }
  }

  changeHandler = event => {
    event.preventDefault();

    this.setState({smurf: { ...this.state.smurf,
      [event.target.name]: event.target.value}})
  }
  update = (e) => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf, this.props.id)
    this.setState({smurf: {name: "", age: "", height: ""}})
  }

  render(){
      return (
        <div>
        <form onSubmit={this.update}>
          <fieldset>
            <legend>Update Smurf Information</legend>
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" id="name" value={this.state.smurf.name} onChange={this.changeHandler}/>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" value={this.state.smurf.age} onChange={this.changeHandler}/>
            <label htmlFor="email">height:</label>
            <input type="text" name="height" id="email" value={this.state.smurf.height} onChange={this.changeHandler}/>
            <input type="submit" value="Update Smurf"/>
            <input type="reset" value={`Cancel Update ${this.state.smurf.name}`} onClick={ () => this.props.hideForm()}/>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mstp = state => {
  return {
    id: state.id
  }
}

export default connect(mstp, { hideForm, updateSmurf })(UpdateSmurf);