import React from 'react';

const Smurf = (props) => {
  return (
    <div className="smurf">
      <h1>{props.smurf.name}</h1>
      <div className="smurf-data">
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
      </div>
    </div>
  );
}

export default Smurf;