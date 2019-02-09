import { LOADING, SUCCESS, FAILURE, POST_SUCCESS, POST_FAILURE, DELETE_SUCCESS, DELETE_FAILURE } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: [],
        error: action.payload
      };
    case POST_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case POST_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: null
      };
      case DELETE_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
