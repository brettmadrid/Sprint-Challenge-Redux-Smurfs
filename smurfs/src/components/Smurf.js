import React from 'react';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <h1>{props.smurf.name}</h1>
      <div className="smurf-data">
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
      </div>
      <button type="button" onClick={ () => props.deleteSmurf(props.smurf.id)}>Remove</button>
      <button type="button" onClick={ () => props.showForm(props.smurf.id)}>Update Info</button>
    </div>
  );
}

export default Smurf;