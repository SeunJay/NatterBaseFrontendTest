import { SET_TOKEN } from "../actions/types";

const initialState = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
};

export default function authentication(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    default:
      return state;
  }
}
