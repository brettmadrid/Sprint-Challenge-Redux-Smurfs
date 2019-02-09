import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get("http://localhost:3333/smurfs/")
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "loading failure..."
        });
      });
  };
}

export function postSmurf(smurf) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then( response => {
        dispatch({
          type: POST_SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: POST_FAILURE,
          payload: "Post failure..."
        })
      })
  }
}
