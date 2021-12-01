import {GET_TRIPS, SET_LOADING, TRIPS_ERROR} from '../actions/types';

const initialState = {
  trips: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS: {
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TRIPS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
