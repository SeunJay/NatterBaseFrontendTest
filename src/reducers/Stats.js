import { GET_STATS } from "../actions/types";

export const initialState = {
  statistics: {},
  fetching: false,
  fetched: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_STATS}_PENDING`:
      return {
        ...state,
        fetching: true
      };
    case `${GET_STATS}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        statistics: payload.data.statistics
      };
    case `${GET_STATS}_REJECTED`:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload
      };
    default:
      return state;
  }
}
