import { GET_APPLICATIONS } from "../actions/types";

export const initialState = {
  applications: [],
  loading: false,
  loaded: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_APPLICATIONS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_APPLICATIONS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        loaded: true,
        applications: payload.data.applications
      };
    case `${GET_APPLICATIONS}_REJECTED`:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: payload
      };
    default:
      return state;
  }
}
