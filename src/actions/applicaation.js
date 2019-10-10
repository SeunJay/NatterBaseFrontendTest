import { GET_APPLICATIONS } from "./types";

const fetchApplications = payload => ({
  type: GET_APPLICATIONS,
  payload
});

export const getApplications = request => async dispatch => {
  dispatch(fetchApplications(request.get("/get-applications")));
};

export default getApplications;
