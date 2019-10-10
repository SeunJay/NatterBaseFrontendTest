import { GET_STATS } from "./types";

const fetchStats = payload => ({
  type: GET_STATS,
  payload
});

export const getStats = request => dispatch => {
  dispatch(fetchStats(request.get("/get-statistics")));
};

export default getStats;
