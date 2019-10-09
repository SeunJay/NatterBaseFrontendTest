import { GET_STATS, STATS_ERROR, SET_TOKEN, GET_STATS_LOADING } from "./types";

const setToken = payload => ({
  type: SET_TOKEN,
  payload
});

export const setLoading = payload => ({
  type: GET_STATS_LOADING,
  payload
});

const setError = payload => ({
  type: STATS_ERROR,
  payload
});

const fetchStats = payload => ({
  type: GET_STATS,
  payload
});

export const getStats = request => async dispatch => {
  try {
    const res = await request.get("/get-statistics");
    dispatch(fetchStats(res.data.statistics));
    dispatch(setLoading(false))
    dispatch(
      setToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
      )
    );
    return res.data.statistics;
  } catch (error) {
    return dispatch(setError(error));
  }
};

export default getStats;
