import { LOADING, SUCCESS, FAILURE } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: [],
        error: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;

