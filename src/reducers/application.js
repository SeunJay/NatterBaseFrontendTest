import { GET_APPLICATIONS, APPLICATIONS_ERROR } from "../actions/types";

export const initialState = {
  applications: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: payload
      };
    case APPLICATIONS_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
