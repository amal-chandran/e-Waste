import { AUTH_SET_DATA } from "./../actions/auth-actions";
const initialState = {
  auth: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SET_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
