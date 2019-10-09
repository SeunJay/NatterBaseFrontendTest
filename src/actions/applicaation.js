import { GET_APPLICATIONS, APPLICATIONS_ERROR, SET_TOKEN } from "./types";

const setToken = payload => ({
  type: SET_TOKEN,
  payload
});

const setError = payload => ({
  type: APPLICATIONS_ERROR,
  payload
});

const fetchApplications = payload => ({
  type: GET_APPLICATIONS,
  payload
});

export const getApplications = request => async dispatch => {
  try {
    const res = await request.get("/get-applications");
    dispatch(fetchApplications(res.data.applications));
    dispatch(
      setToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
      )
    );
    return res.data.applications;
  } catch (error) {
    return dispatch(setError(error));
  }
};

export default getApplications;
