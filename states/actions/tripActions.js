import {GET_TRIPS, SET_LOADING, TRIPS_ERROR} from './types';

//Get trips from data
export const getTrips = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('../../data/trip-list.json');
    const data = await res.json();

    dispatch({
      type: GET_TRIPS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRIPS_ERROR,
      payload: error.response.data,
    });
  }
};

//SET Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
