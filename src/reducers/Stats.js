import { GET_STATS, STATS_ERROR } from "../actions/types";

export const initialState = {
  statistics: {},
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STATS:
      return {
        ...state,
        statistics: payload,
        loading: false
      };
    case STATS_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
