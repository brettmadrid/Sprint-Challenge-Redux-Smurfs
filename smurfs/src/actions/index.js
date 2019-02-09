import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

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
